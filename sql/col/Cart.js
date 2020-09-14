/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-24 17:31:23
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-25 19:55:49
 */
const mongoose=require('./../db')
const Schema=mongoose.Schema;

const schema=new Schema({
    cartid:{type:String},
    proid:{type:String},
    userid:{type:String},
    num:{type:Number},
    flag:{type:Boolean}
})
module.exports=mongoose.model('Cart',schema);
