/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-04 20:27:37
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-09 21:53:51
 */
var express = require('express');
const sql = require('../sql');
var router = express.Router();
var md5 = require('md5')
var Admin=require('./../sql/col/Admin')

/* GET home page. */
router.get('/', function(req, res, next) {
  // render渲染 index代表views中的index.ejs
  res.render('index', { 
    activeindex:0,
    // role:req.cookies.role*1
    role:req.session.role
 });
});

router.get('/login',function(req,res,next){
  res.render('login')
})

router.post('/loginAction',(req,res,next)=>{
  let{adminname,password}=req.body
  password=md5(password)
  sql.find(Admin,{adminname,password},{_id:0}).then(data=>{
    if(data.length===0){
      res.redirect('/login')
    }else{
      //登陆
      //保存登陆信息（登陆状态+角色）
      //cookie/session/token
      // res.cookie('loginState',true)
      // res.cookie('role',data[0].role)
      req.session.loginState=true
      req.session.role=data[0].role
      res.redirect('/')
      
    }
  })
})
module.exports = router;
