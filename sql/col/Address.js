/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-08 16:16:35
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-27 20:25:28
 */
const mongoose=require('./../db')
const Schema=mongoose.Schema

const schema=new Schema({
    addressid:{type:String},
    userid:{type:String},
    name:{type:String}, 
    tel:{type:String},
    province:{type:String},
    city:{type:String},
    county:{type:String},
    addressDetail:{type:String},
    isDefault:{type:Boolean},
    time:{type:String} // 列表中最新添加的在最上面
})
module.exports=mongoose.model('Address',schema)