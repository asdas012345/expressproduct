/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-04 21:50:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-10 20:21:20
 */
var express = require('express');
const sql = require('../sql');
var router = express.Router();
var uuid=require('node-uuid')
var Banner=require('../sql/col/Banner')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('banner',{
    activeindex:1,
    role:req.session.role
  })
});


router.post('/add',function(req,res,next){
  const {alt,href,img}=req.body
  sql.insert(Banner,{
    bannerid:'banner_'+uuid.v1(),
    alt,
    href,
    img
  }).then(()=>{
    sql.find(Banner,{},{_id:0}).then(data=>{
      res.send(data)
    })
  })
})
module.exports = router;
