var express = require('express');
var sql=require('../sql')
var Product=require('../sql/col/Product')
var router = express.Router();

  /**
   * @api {get} /api/search 搜索
   * @apiName ApiSearch
   * @apiGroup search
   * 
   * @apiParam { String } searchText 搜索关键词
   * @apiSuccess {json} Success-Response:
   *  res.send({
        code: '200',
        message: '搜索',
        data
      })
   * @apiSampleRequest /api/search
   * @apiVersion 0.0.0
   */
router.get('/', function(req, res, next) {
  const {searchText}=req.query
  const reg=new RegExp(searchText)
  sql.find(Product,{$or:[{proname:reg},{desc:reg}]},{_id:0}).then(data=>{
    res.send({
      code:'200',
      message:'搜索',
      data
    })
  })
});

module.exports = router;
