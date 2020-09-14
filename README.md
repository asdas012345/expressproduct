<!--
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-03-05 14:42:02
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-09-14 18:27:01
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
