/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-26 19:22:26
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-27 19:23:48
 */

const mongoose=require('./../db')
const Schema=mongoose.Schema;
const schema=new Schema({
    orderid:{type:String},
    cartid:{type:String},
    userid:{type:String},
    proname:{type:String},
    price:{type:Number},
    proimg:{type:String},
    price:{type:Number},
    num:{type:Number},
    time:{type:String},
    status:{type:Number},//0 待支付 1待收货 2已完成
    name:{type:String},
    tel:{type:String},
    address:{type:String},
})
module.exports=mongoose.model('Order',schema);
