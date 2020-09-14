/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-04 21:51:27
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-09 20:51:07
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('cart',{
    activeindex:4,
    role:req.session.role
  })
});

module.exports = router;
