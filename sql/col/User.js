/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-08 16:16:35
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-11 11:19:00
 */
const mongoose=require('./../db')
const Schema=mongoose.Schema

const schema=new Schema({
    userid:{type:String},
    username:{type:String},
    password:{type:String},
    birthday:{type:Number},
    email:{type:String},
    tel:{type:String},
    sex:{type:Number},
    avatar:{type:String},
    regTime:{type:Number},
    telCode:{type:String},
    loginState:{type:Number}
})
module.exports=mongoose.model('User',schema)