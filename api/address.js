/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-10 16:38:55
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-31 21:54:05
 */
var express=require('express');
var router=express.Router();
var sql=require('./../sql/index')
var Address=require('./../sql/col/Address');
var uuid=require('node-uuid')
var utils=require('../utils/index')

router.get('/',(req,res,next)=>{
    res.send('地址相关接口')
})


// 添加地址
/**
 * @api {post} /api/address/add 添加地址
 * @apiName postAddressAdd
 * @apiGroup  address
 * @apiParam { String } userid 用户id
 * @apiParam { String } name 收货人姓名
 * @apiParam { String } tel 收货人手机号
 * @apiParam { String } provice 省
 * @apiParam { String } city 市
 * @apiParam { String } county 区/县
 * @apiParam { String } addressDetail 详细地址
 * @apiParam { Boolean } isDefault 默认地址
 * @apiParam { String } token 可以通过 头信息传递

 * 
 * @apiSuccess {json} Success-Response
*   res.send({
      code: '200',
      message: '更新所有的选中和非选中状态',
    })
 * @apiSampleRequest /api/address/add
 * @apiVersion 0.0.0
 */

router.post('/add',(req,res,next)=>{
    utils.validataToken(req,res).then(()=>{
     let obj=req.body
    let userid=obj.userid
     obj.addressid='address_'+uuid.v1()
     obj.time=new Date().getTime()

     // 如果当前地址是默认地址，保证默认地址只有一个
     if(obj.isDefault){
         sql.update(Address,{userid},{$set:{isDefault:false}},1).then(()=>{
             sql.insert(Address,obj).then(()=>{
                 res.send({
                     code:'200',
                     message:'插入地址'
                 })
             })
         })
     }else{
         // 如果没有默认地址，直接插入
         sql.insert(Address,obj).then(()=>{
            res.send({
                code:'200',
                message:'插入地址'
            })
        })
     }
    })
  })


// 默认收货地址
/**
 * @api {post} /api/address/defaultAddress 获取默认收货地址
 * @apiName postDefaultAddress
 * @apiGroup  address
 * @apiParam { String } userid 用户id
 * @apiParam { Boolean } isDefault 默认地址
 * @apiSuccess {json} Success-Response
*   res.send({
      code: '200',
      message: '获取默认地址',
      data
    })
 * @apiSampleRequest /api/address/defaultAddress
 * @apiVersion 0.0.0
 */

router.post('/defaultAddress',(req,res,next)=>{
    utils.validataToken(req,res).then(()=>{
        const { userid } = req.body
        sql.find(Address,{userid,isDefault:true},{_id:0}).then(data=>{
            res.send({
                code:'200',
                message:'获取默认地址',
                data
            })
        })
    })
  })


// 获取收货地址列表
/**
 * @api {post} /api/address/addressList 获取收货地址列表
 * @apiName postAddressList
 * @apiGroup  address
 * @apiParam { String } userid 用户id
 * @apiParam { String } time
 * @apiParam { String } token 可以通过 头信息传递
 * @apiSuccess {json} Success-Response
*   res.send({
      code: '200',
      message: '获取收货地址列表',
      data
    })
 * @apiSampleRequest /api/address/addressList
 * @apiVersion 0.0.0
 */

router.post('/addressList',(req,res,next)=>{
    utils.validataToken(req,res).then(()=>{
        const { userid} = req.body
        const { addressid } =req.body
        const time=new Date().getTime()
    sql.update(Address,{addressid},{$set:{time}}).then(()=>{
        sql.sort(Address,{userid},{_id:0},{time:-1}).then(data=>{
            res.send({
                code:'200',
                message:'获取收货地址列表',
                data
             })
        })
    })
    })
})

// 获取收货地址列表
/**
 * @api {post} /api/address/deleteAddress 获取收货地址列表
 * @apiName postDeleteAddress
 * @apiGroup  address
 * @apiParam { String } addressid 地址id
 * @apiSuccess {json} Success-Response
*   res.send({
      code: '200',
      message: '删除成功',
    })
 * @apiSampleRequest /api/address/deleteAddress
 * @apiVersion 0.0.0
 */

router.post('/deleteAddress',(req,res,next)=>{
    utils.validataToken(req,res).then(()=>{
        const { addressid } =req.body
    sql.delete(Address,{addressid}).then(()=>{
        res.send({
            code:'200',
            message:'删除成功',
         })
    })
    })
})

module.exports = router;