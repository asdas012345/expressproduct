/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-10 16:47:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-31 14:17:57
 */
var express = require('express');
var router = express.Router();
var sql = require('./../sql');
const {
  collection
} = require('../sql/col/User');
var Cart = require('./../sql/col/Cart')
var Pro = require('./../sql/col/Product')
var utils = require('./../utils')
var uuid = require('node-uuid')
var router = express.Router()

/* GET cart page. */
/**
 * @api {post} /api/cart 购物车数据
 * @apiName postCart
 * @apiGroup cart
 * 
 * @apiParam { string } userid 用户id
 * @apiParam { string } token 可以通过 头信息传递
 * 
 * @apiSuccess {json} Success-Response:
 *  res.send({
      code: '200',
      message: '购物车数据',
      data
    })
 * @apiSampleRequest /api/cart
 * @apiVersion 0.0.0
 */
router.post('/', function (req, res, next) {
  utils.validataToken(req, res).then(() => {
    const {
      userid
    } = req.body
    // 获取到当前用户的 所有的购物车数据
    sql.find(Cart, {
      userid
    }, {
      _id: 0
    }).then(data => {
      // data  希望得到 [{ proid: '', proname: '',...}, { proid:'',  proname: '',...}]
      // 这个 数据库操作得到 [{cartid: '', userid:'', proid:'', num:1},{cartid: '', userid:'', proid:'', num:1}]
      // 遍历数据  依据proid 获取 产品的信息
      // promise.all(arr).then(data => {})
      const arr = [] // 用来存放多个promise
      data.forEach(item => {
        arr.push(sql.find(Pro, {
          proid: item.proid
        })) // 每一个的数据库的操作都是基于promise的
      })
      Promise.all(arr).then(result => {
        // res.send(result) // [[{}],[{}]]  ===> [{}, {}]
        const list = []
        result.forEach((item, index) => {
          list.push({
            cartid: data[index].cartid, // 通过data去获取，通过索引值 搞定
            userid: userid,
            proid: item[0].proid,
            proname: item[0].proname,
            proimg: item[0].proimg,
            price: item[0].price,
            num: data[index].num,
            flag:data[index].flag
          })
        })
        res.send({
          code: '200',
          message: '获取购物车数据',
          data: list
        })
      })
    })
  })
});

// 加入购物车
/**
 * @api {post} /api/cart/add 加入购物车
 * @apiName postCartAdd
 * @apiGroup cart
 * @apiParam { String } userid 用户id
 * @apiParam { String } proid 产品id
 * @apiParam { String } num 数量，默认值为1
 * @apiParam { String } token 可以通过头信息传递
 * 
 * @apiSuccess {json} Success-Response
*   res.send({
      code: '200',
      message: '加入购物车成功',
    })
 * @apiSampleRequest /api/cart/add
 * @apiVersion 0.0.0
 */
router.post('/add', (req, res, next) => {
  utils.validataToken(req, res).then(() => {
    let {
      userid,
      proid,
      num
    } = req.body
    num = num * 1 || 1
    // 判断当前用户的购物车中有没有该产品，如果有该产品，数量累加，没有该产品，插入数据
    sql.find(Cart, {
      userid,
      proid
    }, {
      _id: 0
    }).then(data => {
      if (data.length === 0) {
        // 插入数据
        sql.insert(Cart, {
          cartid: 'cart_' + uuid.v1(),
          userid,
          proid,
          num,
          flag:true
        }).then(() => {
          res.send({
            code: '200',
            message: '加入购物车成功'
          })
        })
      } else {
        // 更新数据
        sql.update(Cart, {
          userid,
          proid
        }, {
          $inc: {
            num: num
          }
        }).then(() => {
          res.send({
            code: '200',
            message: '加入购物车成功'
          })
        })
      }
    })
  })
})

// 删除购物车数据
/**
 * @api {post} /api/cart/add 删除购物车数据
 * @apiName postCartDelete
 * @apiGroup cart
 * @apiParam { String } cartid 购物车id
 * @apiParam { String } token 可以通过头信息传递
 * 
 * @apiSuccess {json} Success-Response
*   res.send({
      code: '200',
      message: '删除购物车数据',
    })
 * @apiSampleRequest /api/cart/delete
 * @apiVersion 0.0.0
 */
router.post('/delete', (req, res, next) => {
  utils.validataToken(req, res).then(() => {
    let {
      cartid
    } = req.body
    sql.delete(Cart, {
      cartid
    }).then(() => {
      res.send({
        code: '200',
        message: '删除购物车数据'
      })
    })
  })
})


// 更新购物车数量
/**
 * @api {post} /api/cart/updateNum 更新购物车数据
 * @apiName postCartUpdateNum
 * @apiGroup cart
 * @apiParam { String } cartid 购物车id
 * @apiParam { number } num 数量
 * @apiParam { String } token 可以通过头信息传递
 * 
 * @apiSuccess {json} Success-Response
*   res.send({
      code: '200',
      message: '更新购物车数据',
    })
 * @apiSampleRequest /api/cart/updateNum
 * @apiVersion 0.0.0
 */
router.post('/updateNum', (req, res, next) => {
  utils.validataToken(req, res).then(() => {
    let {
      cartid,
      num
    } = req.body
    num *=1
    console.log(num,cartid)
    sql.update(Cart,{cartid},{$set:{num}}).then(()=>{
      res.send({
        code:'200',
        message:'更新购物车数量'
      })
    })
  })
})

// 更新所有的选中和非选中状态
/**
 * @api {post} /api/cart/updateAllFlag 更新所有的选中和非选中状态
 * @apiName postCartUpdateAllFlag
 * @apiGroup cart
 * @apiParam { String } userid 用户id
 * @apiParam { boolean } checked 全选的，选中状态
 * @apiParam { string } token 可以通过 头信息传递
 * @apiSuccess {json} Success-Response
*   res.send({
      code: '200',
      message: '更新所有的选中和非选中状态',
    })
 * @apiSampleRequest /api/cart/updateAllFlag
 * @apiVersion 0.0.0
 */

 router.post('/updateAllFlag',(req,res,next)=>{
   utils.validataToken(req,res).then(()=>{
     let{ userid,checked }=req.body
     console.log(typeof checked,checked)
     // 更改多个数据用 1
     sql.update(Cart,{userid},{$set:{flag:checked}},1).then(()=>{
       res.send({
         code:'200',
         message:'更新所有的选中和非选中状态'
       })
     })
   })
 })

 // 更新单个选中的状态
/**
 * @api {post} /api/cart/updateFlag 更新单个选中的状态
 * @apiName postCartUpdateFlag
 * @apiGroup cart
 * @apiParam { String } cartid 购物车id
 * @apiParam { boolean } checked 全选的，选中状态
 * @apiParam { string } token 可以通过 头信息传递
 * @apiSuccess {json} Success-Response
*   res.send({
      code: '200',
      message: '更新所有的选中和非选中状态',
    })
 * @apiSampleRequest /api/cart/updateFlag
 * @apiVersion 0.0.0
 */

router.post('/updateFlag',(req,res,next)=>{
  utils.validataToken(req,res).then(()=>{
    let{ cartid,checked }=req.body
    console.log(typeof checked,checked)
    // 更改多个数据用 1
    sql.update(Cart,{cartid},{$set:{flag:checked}}).then(()=>{
      res.send({
        code:'200',
        message:'更新单个选中的状态'
      })
    })
  })
})
module.exports = router;