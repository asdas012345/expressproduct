/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-04 20:27:37
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-11 17:11:31
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users',{
    activeindex:3,
    role:req.session.role
  })
});

module.exports = router;
