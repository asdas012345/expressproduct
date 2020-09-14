
/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-28 21:41:45
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-29 15:35:29
 */
var express=require('express')
var QRCode=require('qrcode')
var config=require('../config');
var { getNoncestr,getSign,getXml,getxml2js }=require('../utils/tools')
var axios=require('axios')
var router = express.Router();

router.get('/',(req,res,next)=>{
    res.send('支付相关接口');
})

 /**
   * @api {get} /api/pay/payment 生成支付二维码
   * @apiName GetPayment
   * @apiGroup pay
   * 
   * @apiParam { String } body 订单描述
   * @apiParam { String } out_trade_no 订单id
   * @apiParam { String } total_fee 订单金额
   * @apiSuccess {json} Success-Response:
   *  res.send({
        code: '200',
        message: '生成支付的二维码',
        url
      })
   * @apiSampleRequest /api/pay/payment
   * @apiVersion 0.0.0
   */
router.get('/payment',function(req,res,next){
   
    let {body,out_trade_no,total_fee}=req.body
    total_fee *=1 
    // 1.准备需要的数据
    var _prepay={
        appid:config.appid,
        mch_id:config.mch_id,
        nonce_str:getNoncestr(),
        body:'哈哈哈哈',
        out_trade_no:'order_003',
        total_fee:1,
        notify_url:config.notify_url,
        trade_type:'NATIVE'
    }

    // 2.准备签名
    var sign=getSign(_prepay)
    

    // 3.整合数 生成相应的xml文件
    var xmlbody=getXml(_prepay,sign)
    console.log(config.unifiedorder)
    // 4.调用统一下单接口
    axios({
        url:config.unifiedorder,
        method:'post',
        data:xmlbody
    }).then(response=>{
        // 5.取得支付的url地址
        var obj=getxml2js(response.data)
       
        var { code_url } =obj
        // console.log(code_url)
        QRCode.toDataURL(code_url,(err,url)=>{
            if (err) throw err
            res.send({
                code:'200',
                message:'生成支付的二维码',
                url
            })
        })
    })
})

module.exports=router