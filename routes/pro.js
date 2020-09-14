/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-04 21:51:06
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-31 16:30:11
 */
/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-04 21:50:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-05 20:01:22
 */
var express = require('express');
var router = express.Router();
var xlsx = require('node-xlsx');
var uuid = require('node-uuid');
var sql = require('./../sql/index');
var Product = require('./../sql/col/Product');


/* GET users listing. */
//渲染初始页面,分页
router.get('/', function (req, res, next) {
  sql.find(Product, {}, {_id: 0}).then(data => {
    const totalNum=data.length
    let{ limit, count} =req.query
    limit =limit*1 || 10;
    count =count*1 || 1
    const totalCount=Math.ceil(totalNum/limit)
    //调用分页操作--获取相应页码对应的数据
    sql.paging(Product,{},{_id:0},limit,count).then(data1=>{
      res.render('pro', {
        activeindex: 2,
        data:data1, //哪十条数据
        totalCount, //总页数
        limit,  //每页显示的条数
        count, //当前页码
        role:req.session.role
      });
    })
  });
});
// 排序
router.get('/sort',(req,res,next)=>{
  let{type,num}=req.query
  num=num*1
  sql.sort(Product,{},{_id:0},{[type]:num}).then(data=>{
    res.render('pro',{
      activeindex:2,
      data,
      totalCount:1,
      limit:data.length,
      count:1,
      role:req.session.role
    })
  })
})

// 跳转到添加页面
router.get('/add', function (req, res, next) {
  res.render('pro_add', {
    activeindex: 2,
    role:req.session.role
  })
})
 // 添加数据
router.post('/addAction',(req,res,next)=>{
  let insertData=req.body
  insertData.rating *=1
  insertData.price *=1
  insertData.sales *=1
  insertData.stock *=1
  insertData.discount *=1
  insertData.proid="pro_"+uuid.v1();
  // res.send(insertData)

  sql.insert(Product,insertData).then(()=>{
    res.redirect('/pro')
  })
})

// __dirname 代表当前这个文件处于系统中的绝对路径
//导入数据
const file = __dirname + '/pro.xlsx';
router.get('/upload', (req, res, next) => {
  const data1 = xlsx.parse(file);
  const data = data1[0].data;
  const arr = [];
  data.forEach((item, index) => {
    if (index > 0) {
      arr.push({
        proid: 'pro_' + uuid.v1(),
        proname: item[1],
        category: item[2],
        brand: item[3],
        logo:item[4],
        proimg: item[5],
        price: item[6] * 1,
        desc: item[7],
        stock: item[8] * 1,
        sales: item[9] * 1,
        discount: item[10] * 1,
        rating: item[11] * 1,
      })
    }
  })
  // 为了避免重复数据重复上传，在此可以先删除所有的数据，然后再执行
  sql.delete(Product,{},1).then(()=>{
    sql.insert(Product, arr).then(() => {
      res.redirect('/pro')
    })
  })
})
//查询
  router.get('/search',(req,res,next)=>{
    const{searchText}=req.query //模糊查询
    const reg=new RegExp(searchText)
    sql.find(Product,{$or:[{proname:reg},{desc:reg}]},{_id:0}).then(data=>{
      res.render('pro',{
        activeindex:2,
        data,
        totalCount:1,
        limit:data.length,
        count:1
      })
    })

  })
  //删除操作
  router.get('/delete',(req,res,next)=>{
    const {proid}=req.query
    sql.delete(Product,{proid}).then(()=>{
      res.redirect('/pro')
    })
  })
  //更新操作
  // 现根据proid查询到相关数据，然后发送post请求提交修改
  router.get('/update',(req,res,next)=>{
    const { proid }=req.query
    console.log(proid);
    sql.find(Product,{proid},{_id:0}).then(data=>{
       res.render('pro_update',{
        activeindex:2,
        proid:data[0].proid,
        proname: data[0].proname,
        category:data[0].category,
        brand: data[0].brand,
        logo: data[0].logo,
        proimg: data[0].proimg,
        price: data[0]. price,       
        desc: data[0].desc,
        stock: data[0].stock,
        sales: data[0].sales,
        discount: data[0].discount,
        rating: data[0].rating,
        role:req.session.role
    })
    })
  })
  //修改
  router.post('/updateAction',(req,res,next)=>{
    let obj=req.body
    obj.price*=1
    obj.stock*=1
    obj.sales*=1
    obj.discount*=1
    obj.rating*=1
    sql.update(Product,{proid:obj.proid},{$set:obj}).then(()=>{
      res.redirect('/pro')
    })
  
  })
 

module.exports = router;