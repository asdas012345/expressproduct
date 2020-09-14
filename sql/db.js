/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-06 16:35:40
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-06 17:26:54
 */
const mongoose=require('mongoose');
const DB_URL='mongodb://localhost:27017/sh2007';

mongoose.connect(DB_URL,{useNewUrlParser:true,useUnifiedTopology:true});

mongoose.connection.on("connected",()=>{
    console.log('数据库连接成功')
})
mongoose.connection.on("disconnected",()=>{
    console.log('数据库连接断开')
})
mongoose.connection.on("error",(err)=>{
    console.log('数据库连接异常',err)
})
module.exports=mongoose