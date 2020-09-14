/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-08 16:16:35
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-10 20:16:13
 */
const mongoose=require('./../db')
const Schema=mongoose.Schema

const schema=new Schema({
   bannerid:{type:String},
   alt:{type:String},
   href:{type:String},
   img:{type:String}
})
module.exports=mongoose.model('Banner',schema)