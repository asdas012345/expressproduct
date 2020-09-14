
/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-04 20:27:37
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-30 20:14:38
 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session=require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bannerRouter = require('./routes/banner');
var proRouter = require('./routes/pro');
var cartRouter = require('./routes/cart');
var orderRouter = require('./routes/order');
var messageRouter = require('./routes/message');

// 接口
var bannerApiRouter = require('./api/banner')
var cartApiRouter = require('./api/cart')
var commentApiRouter = require('./api/comment')
var orderApiRouter = require('./api/order')
var proApiRouter = require('./api/pro')
var searchApiRouter = require('./api/search')
var userApiRouter = require('./api/user')
var payApiRouter = require('./api/pay')
var addressApiRouter = require('./api/address')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret:"nihao",
  cookie:{maxAage:60*1000*30},
  resave:true,
  saveUninitialized:false
}))
// api接口需要在*之前注册，路由从上到下匹配

app.use('/api/banner', bannerApiRouter)
app.use('/api/cart', cartApiRouter)
app.use('/api/comment', commentApiRouter)
app.use('/api/order', orderApiRouter)
app.use('/api/pro', proApiRouter)
app.use('/api/search', searchApiRouter)
app.use('/api/user', userApiRouter)
app.use('/api/pay', payApiRouter)
app.use('/api/address', addressApiRouter)


// 除了/login /loginAction 其余的都需要校验登录状态
// 一定是写在定义路由的最前面,路由的匹配是从上到下的
app.all('*',(req,res,next)=>{
  if(req.url === '/login' || req.url === '/loginAction'){
     next()
  }else{
    // if(req.cookies.loginState==='true'){
      if(req.session.loginState===true){
      next()
    }else{
      res.redirect('/login')
    }
  }
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/banner', bannerRouter);
app.use('/cart', cartRouter);
app.use('/pro', proRouter);
app.use('/order', orderRouter);
app.use('/message', messageRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
