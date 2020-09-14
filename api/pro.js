/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-10 11:32:28
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-31 19:25:53
 */
/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-10 11:32:28
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-29 11:32:08
 */

var express=require('express');
var sql=require('./../sql/index')
var Pro=require('./../sql/col/Product');
var router=express.Router();
/**
 * @api {get} /api/pro 获取商品的列表数据
 * @apiName GetApiPro
 * @apiGroup pro
 * @apiParam { Number } limit 每页显示的个数,默认值为10
 * @apiParam { Number } count 页码，默认值为1
 * 
 * @apiSuccess {json} Success-Response
 * res.send({
    code:'200',
    message:'获取商品的列表数据',
    data
    })
 * @apiSampleRequest /api/pro
 * @apiVersion 0.0.0
 */

 router.get('/',function(req,res,next){
     let {limit,count}=req.query
     limit = limit * 1 || 10
     count = count * 1 || 1
     sql.paging(Pro,{},{_id:0},limit,count).then(data=>{
         res.send({
             code:'200',
             message:'请求商品的列表数据',
             data
         })
     })
 })

  /**
   * @api {get} /api/pro/detail 获取商品详情接口
   * @apiName GetApiProDetail
   * @apiGroup pro
   * 
   * @apiParam { String } proid 产品id
   * @apiSuccess {json} Success-Response:
   *   res.send({
          code: '10001',
          message: '查无此产品'
        })
   *  res.send({
        code: '200',
        message: '获取商品详情接口',
        data
      })
   * @apiSampleRequest /api/pro/detail
   * @apiVersion 0.0.0
   */
  router.get('/detail', (req, res, next) => {
    const { proid } = req.query
    sql.find(Pro, { proid }, { _id: 0}).then(data => {
      if (data.length === 0) {
        res.send({
          code: '10001',
          message: '查无此产品'
        })
      } else {
        res.send({
          code: '200',
          message: '获取商品详情接口',
          data: data[0]
        })
      }
    })
  })

   /**
   * @api {get} /api/pro/category 获取商品的分类数据
   * @apiName GetApiProCategory
   * @apiGroup pro
   * @apiSuccess {json} Success-Response:
   *  res.send({
        code: '200',
        message: '获取商品的分类数据',
        data
      })
   * @apiSampleRequest /api/pro/category
   * @apiVersion 0.0.0
   */
  router.get('/category', (req, res, next) => {
    // 获取商品的分类数据
    sql.distinct(Pro,'category').then(data=>{
      res.send({
        code:'200',
        message:'获取商品的分类数据',
        data
      })
    })
  })

  /**
   * @api {get} /api/pro/categorybrand 获取分类下的品牌的数据
   * @apiName GetProCategorybrand
   * @apiGroup pro
   * @apiParam {string} category 分类名称
   * @apiSuccess {json} Success-Response:
   *  res.send({
        code: '200',
        message: '获取分类下的品牌的数据',
        data
      })
   * @apiSampleRequest /api/pro/categorybrand
   * @apiVersion 0.0.0
   */
  router.get('/categorybrand', (req, res, next) => {
    // 获取商品的分类数据
    const { category }=req.query
    sql.find(Pro,{category},{_id:0,brand:1,logo:1}).then(data=>{
      const obj={}
      const result = data.reduce((item,next)=>{
        obj[next.brand] ? '': obj[next.brand]=true && item.push(next)
        return item;
      },[])
      res.send({
        code:'200',
        message:'获取分类下的品牌的数据',
        data:result
      })
    })
  })

    /**
   * @api {get} /api/pro/categorybrandlist 获取分类下的品牌的列表数据
   * @apiName GetProCategorybrandList
   * @apiGroup pro
   * @apiParam {string} category 分类名称
   * @apiParam {string} brand 品牌
   * @apiSuccess {json} Success-Response:
   *  res.send({
        code: '200',
        message: '获取分类下的品牌的数据',
        data
      })
   * @apiSampleRequest /api/pro/categorybrandlist
   * @apiVersion 0.0.0
   */
  router.get('/categorybrandlist', (req, res, next) => {
    // 获取商品的分类数据
    const { category,brand }=req.query
    sql.find(Pro,{category,brand},{_id:0}).then(data=>{
      res.send({
        code:'200',
        message:'获取分类下的品牌的列表数据',
        data
      })
    })
  })
  
 module.exports=router