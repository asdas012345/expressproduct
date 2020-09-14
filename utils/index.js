/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-11 16:39:27
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-09-04 15:41:36
 */
const Core = require('@alicloud/pop-core');
const jwt=require('jsonwebtoken')

module.exports={
    validataToken(req,res){
      // 头信息 /get /post
      const token = req.headers.token || req.query.token || req.body.token
      // 使用promise 解决异步操作 验证token是异步的
      return new Promise((resolve,reject)=>{
          if(token){
            jwt.verify(token,'sh2007',(err,decoded)=>{
              if(err){
                // reject()
                res.send({
                  code:'10119',
                  message:'token验证失败'
                })
              }else{
                req.decoded=decoded
                resolve()
              }
            })
          }else{
            // reject()
            res.send({
              code:'10119',
              message:'token验证失败'
            })
          }
      })
    },
    // 发送短信验证码
    sendCode(PhoneNumbers,code){
        var client = new Core({
            accessKeyId: 'LTAI4G7k3dD9Atu4NSFS83to',
            accessKeySecret: '5WX4UmIAdDoOMzjf5M8W10ljcZjJaI',
            endpoint: 'https://dysmsapi.aliyuncs.com',
            apiVersion: '2017-05-25'
          });
          var params = {
            "RegionId": "cn-hangzhou",
            "PhoneNumbers": "18217672601",
            "SignName": "A商城",
            "TemplateCode": "SMS_199222507",
            "TemplateParam": "{code:"+ code +"}"
          }
        // var client = new Core({
        //   accessKeyId: 'LTAI4GHRfuLMX2HepgGYJUKN',
        //   accessKeySecret: 'ocTo3gcUj8sNyuZZdBpje18kRkhpRv',
        //   endpoint: 'https://dysmsapi.aliyuncs.com',
        //   apiVersion: '2017-05-25'
        // });
        
        // var params = {
        //   "RegionId": "cn-hangzhou",
        //   "PhoneNumbers": PhoneNumbers,
        //   "SignName": "大勋说",
        //   "TemplateCode": "SMS_171853298",
        //   "TemplateParam": "{ code: "+ code +"}"
        // }
          var requestOption = {
            method: 'POST'
          };
          return new Promise((resolve,reject)=>{
            client.request('SendSms', params, requestOption).then((result) => {
                console.log(JSON.stringify(result));
                resolve()
              }, (ex) => {
                console.log(ex);
                reject()
              })
          })
          
    }
}



