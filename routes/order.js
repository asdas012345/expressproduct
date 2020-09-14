/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-04 21:52:23
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-09 20:55:29
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('order',{
    activeindex:5,
    role:req.session.role
  })
});

module.exports = router;
