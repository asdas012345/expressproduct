/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-06 17:24:47
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-07 21:46:24
 */
const mongoose=require('./../db')
const Schema=mongoose.Schema;
const schema=new Schema({
    proid:{type:String},
    proname:{type:String},
    logo:{type:String},
    price:{type:Number},
    proimg:{type:String},
    desc:{type:String},
    stock:{type:Number},
    sales:{type:Number},
    rating:{type:Number},
    category:{type:String},
    brand:{type:String},
    discount:{type:Number}
})
module.exports=mongoose.model('Product',schema);
