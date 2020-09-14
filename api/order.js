/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-10 16:47:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-29 10:43:40
 */
var express = require('express');
var router = express.Router();
var randomstring=require('randomstring')
var sql=require('./../sql/index')
var Order=require('./../sql/col/Order');
var Cart=require('./../sql/col/Cart');
var utils=require('./../utils')


/**
 * @api {post} /api/order/add 添加订单信息
 * @apiName orderAdd
 * @apiGroup user
 * 
 * @apiParam {Array} list 订单信息
 * 
 * @apiSuccess {json} Success-Response:
 *    res.send({
          code:'200',
          message:'添加订单信息'，
          data:time
        })
      
 * @apiSampleRequest /api/order/add
 * @apiVersion 0.0.0
 * */

router.get('/', function(req, res, next) {
  res.send('订单相关接口')
});

router.post('/add',function(req,res,next){
  utils.validataToken(req,res).then(()=>{
    let {list}=req.body
    const time=new Date().getTime()
    // let newlist=list.map(item=>{
    //   return{
    //     name:'',
    //     tel:'',
    //     address:'',
    //     time:time,
    //     status:0,
    //     orderid:'order_'+randomstring.generate(13)+time
    //   }
    // })
    list.forEach(item=>{
      item.name=''
      item.tel=''
      item.address=''
      item.time=time
      item.status=0
      item.orderid='order_'+randomstring.generate(13)+time
    })
    sql.insert(Order,list).then(()=>{
      res.send({
        code:'200',
        message:'添加订单信息',
        data:time
      })
    })
  })
})

/**
 * @api {post} /api/order/confirmOrderInfo 获取确认订单的数据列表
 * @apiName postConfirmOrderInfo
 * @apiGroup order
 * 
 * @apiParam {string} userid 用户id
 * @apiParam {string} time 时间
 * @apiParam {string} token 可以通过 头信息传递
 * @apiSuccess {json} Success-Response:
 *    res.send({
          code:'200',
          message:'获取确认订单的数据列表'，
          data
        })
      
 * @apiSampleRequest /api/order/confirmOrderInfo
 * @apiVersion 0.0.0
 * */

router.post('/confirmOrderInfo',function(req,res,next){
  utils.validataToken(req,res).then(()=>{
    let {userid,time}=req.body
    sql.find(Order,{userid,time},{_id:0}).then(data=>{
      res.send({
        code:'200',
        message:'获取确认订单的数据列表',
        data
      })
    })
  })
})

/**
 * @api {post} /api/order/updateAddress 更新订单的地址
 * @apiName postUpdateAddress
 * @apiGroup order
 *
 * @apiParam {string} userid 用户id
 * @apiParam {string} time 时间
 * @apiParam {string} name 姓名
 * @apiParam {string} tel 手机号
 * @apiParam {string} address 地址
 * @apiParam {string} token 可以通过 头信息传递
 * @apiSuccess {json} Success-Response:
 *    res.send({
          code:'200',
          message:'更新订单的地址'，
        })
 * @apiSampleRequest /api/order/updateAddress
 * @apiVersion 0.0.0
 * */

router.post('/updateAddress',function(req,res,next){
  utils.validataToken(req,res).then(()=>{
   const{ userid,time,name,tel,address}=req.body
    sql.update(Order,{userid,time},{$set:{name,tel,address}},1).then(()=>{
      res.send({
        code:'200',
        message:'更新订单的地址',
      })
    })

  })
})

/**
 * @api {post} /api/order/deleteCartData 删除购物车的数据
 * @apiName postDeleteCartData
 * @apiGroup order
 * @apiParam {string} userid 用户id
 * @apiParam {string} token 可以通过 头信息传递
 * @apiSuccess {json} Success-Response:
 *    res.send({
          code:'200',
          message:'删除购物车的数据'，
        })
 * @apiSampleRequest /api/order/deleteCartData
 * @apiVersion 0.0.0
 * */
router.post('/deleteCartData',(req,res,next)=>{
  utils.validataToken(req,res).then(()=>{
    // const {userid,list}=req.body
    // 遍历list 调用删除 压入数组，调用promise.all方法
    const {userid} =req.body
    // 次接口去支付按钮的时间，此页面说明，数据库购物车中的flag字段为true才可进入该页面
    // 我们需要删除的就是购物车中的flag字段为true的数据
      sql.delete(Cart,{userid,flag:true},1).then(()=>{
          res.send({
            code:'200',
            message:'删除购物车的数据'
          })
      })
  })
})

module.exports = router;
