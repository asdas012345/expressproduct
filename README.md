<!--
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-03-05 14:42:02
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-09-14 18:54:26
 -->
# vue-product

该项目已经打包部署
url:http://vue.lujiajing.top
接口文档url：http://vue.lujiajing.top/apidoc 用于配合vueshopping
生成apidoc页面： apidoc -i api/ -o public/apidoc

## 项目介绍
用express框架配合mongodb开发，前端用bootstrap框架
为了提供诸如图像、CSS 文件和 JavaScript 文件之类的静态文件，请使用 Express 中的 express.static 内置中间件函数。
管理员账号：admin
管理员密码：123456

## 路由
路由是指确定应用程序如何响应客户端对特定端点的请求，该特定端点是URI（或路径）和特定的HTTP请求方法（GET，POST等）。
每个路由可以具有一个或多个处理程序函数，这些函数在匹配该路由时执行。

## 登录注册
如果登陆成功，后端将loginstate登陆状态返回给前端并保存。
前端每次向后端请求数据都要带上loginstate的值，来判断是否登录。

## 权限
根据每个用户的权限和左边menu栏的权限进行比较，然后判断是否显示模块。

## 数据库
连接数据库创建集合
封装增删改查操作：
module.exports = {
  insert (collection, insertData) {
    // collection.insertMany(insertData, (err) => {})
    return new Promise((resolve, reject) => {
      collection.insertMany(insertData, (err) => {
        if (err) throw err
        resolve()
      })
    })
  },
  delete (collection, deleteData, num) {
    // collection.deleteOne(deleteData, (err) => {})
    // collection.deleteMany(deleteData, (err) => {})
    // const deleteType = 'deleteOne' || 'deleteMany' 
    // collection[deleteType]()
    // 如果num值存在并且为 1，那么就是删除多条数据， 默认删除的是单条数据
    const deleteType = num && num === 1 ? 'deleteMany' : 'deleteOne'
    return new Promise((resolve, reject) => {
      collection[deleteType](deleteData, (err) => {
        if (err) throw err
        resolve()
      })
    })
  },
  update (collection, whereData, updateData, num) {
    // collection.updateOne(whereData, updateData)
    const updateType = num && num === 1 ? 'updateMany' : 'updateOne'
    return new Promise((resolve, reject) => {
      collection[updateType](whereData, updateData, (err) => {
        if (err) throw err
        resolve()
      })
    })
  },
  find (collection, whereData, showData) {
    // collection.find(whereData, showData, (err, data) => {})
    return new Promise((resolve, reject) => {
      collection.find(whereData, showData, (err, data) => {
        if (err) throw err
        resolve(data)
      })
    })
  },
  paging (collection, whereData, showData, limit, count ) {
    // 页码 count  从 1开始  limit 每页显示个数
    // collection.find(whereData, showData).limit(limit).skip((count - 1) * limit).exec((err, data) => {})
    return new Promise((resolve, reject) => {
      collection.find(whereData, showData).limit(limit).skip((count - 1) * limit).exec((err, data) => {
        if (err) throw err
        resolve(data)
      })
    })
  },
  sort (collection, whereData, showData, sortData) {
    return new Promise((resolve, reject) => {
      collection.find(whereData, showData).sort(sortData).exec((err, data) => {
        if (err) throw err
        resolve(data)
      })
    })
  },
  distinct (collection, type) {
    return new Promise((resolve, reject) => {
      collection.distinct(type).exec((err, data) => {
        if (err) throw err
        resolve(data)
      })
    })
  }
}
