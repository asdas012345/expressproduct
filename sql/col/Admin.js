/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-08 16:16:35
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-08 16:22:35
 */
const mongoose=require('./../db')
const Schema=mongoose.Schema

const schema=new Schema({
    adminid:{type:String},
    adminname:{type:String},
    password:{type:String},
    role:{type:Number} //权限 2表示超级管理员 1普通管理员
})
module.exports=mongoose.model('Admin',schema)