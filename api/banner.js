/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-10 16:47:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-27 16:37:40
 */
var express = require('express');
const sql = require('../sql');
var router = express.Router();
var Banner=require('../sql/col/Banner')

/* GET cart page. */
// router.get('/', function(req, res, next) {
//   res.send('轮播图相关接口')
// });

 /**
   * @api {get} /api/banner 获取轮播图数据
   * @apiName GetApiBanner
   * @apiGroup banner
   * 
   * @apiSuccess {json} Success-Response:
   *  res.send({
        code: '200',
        message: '获取轮播图数据',
        data
      })
   * @apiSampleRequest /api/banner
   * @apiVersion 0.0.0
   */

router.get('/',function(req,res,next){
  sql.find(Banner,{},{_id:0}).then(data=>{
    res.send({
      code:'200',
      message:'获取轮播图数据',
      data
    })
  })
})

module.exports = router;
