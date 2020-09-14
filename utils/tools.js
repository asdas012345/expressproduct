/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-28 21:40:11
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-29 14:18:38
 */
// admin-app/utils/tools.js
var randomstring = require('randomstring');
var crypto = require('crypto');
var querystring = require('querystring');
var config = require('./../config');
var md5=require('md5')
var convert=require('xml-js')
exports.getNoncestr = () => {
  return randomstring.generate(32)
}

exports.getSign = (_prepay) => {
  // 设所有发送或者接收到的数据为集合M，将集合M内非空参数值的参数按照参数名ASCII码从小到大排序（字典序），使用URL键值对的格式（即key1=value1&key2=value2…）拼接成字符串stringA。
  // 字典排序，归并操作
  const _orderedPrepay = Object.keys(_prepay).sort().reduce((obj, key) => {
    obj[key] = _prepay[key]
    return obj
  }, {})

  // 拼接字符串 - 注意url地址不编码
  const stringA = querystring.stringify(_orderedPrepay, null, null, {
    encodeURIComponent: (value) => {
      return decodeURIComponent(value)
    }
  })
  // 在stringA最后拼接上key得到stringSignTemp字符串，并对stringSignTemp进行MD5运算，再将得到的字符串所有字符转换为大写，得到sign值signValue。
  // 拼接API密钥
  const stringSignTemp = stringA + "&key=" + config.key

   // 加密  - md5 - 16进制
   const signValue = crypto.createHash('md5').update(stringSignTemp).digest('hex')
  return signValue
}

// js对象转xml
exports.getXml=(_prepay,sign)=>{
  // 转成xml 先安装convert，内含js转xml文件
    const dataObj={
        xml:{
          // 为后续翻译xml做准备
            ..._prepay,
            sign
        }
    }
    // 转成xml 先安装convert，内含js转xml文件
    const xmlbody=convert.js2xml(dataObj,{
        compact:true
    })
    return xmlbody
}

exports.getxml2js = function (xml) {
  let orderJS = convert.xml2js(xml, { compact: true, textKey: 'value', cdataKey: 'value' })
  // {"xml":{"return_code":{"value":"SUCCESS"},"return_msg":{"value":"OK"},"appid":{"value":"wx100749d4612ea385"},"mch_id":{"value":"1448624302"},"nonce_str":{"value":"Tlwnzaj0oOqyDi8e"},"sign":{"value":"6FE65923E806DB91D194FBB43CEF7CC9"},"result_code":{"value":"SUCCESS"},"prepay_id":{"value":"wx28142047680831191a60ad7973c68a0000"},"trade_type":{"value":"NATIVE"},"code_url":{"value":"weixin://wxpay/bizpayurl?pr=1tw0Gm5"}}}
  var keyArr = Object.keys(orderJS.xml)
  var dataObj = keyArr.reduce((obj, key) => {
    obj[key] = orderJS.xml[key].value
    return obj
  }, {}) // {"return_code":"SUCCESS","return_msg":"OK","appid":"wx100749d4612ea385","mch_id":"1448624302","nonce_str":"jeRjyDtoNeK9WeSm","sign":"C152A23D0B4BB9FD2FD7F09F8BEEB16F","result_code":"SUCCESS","prepay_id":"wx28142453363147191a60ad79c9464c0000","trade_type":"NATIVE","code_url":"weixin://wxpay/bizpayurl?pr=6geVwwG"}
  return dataObj
}