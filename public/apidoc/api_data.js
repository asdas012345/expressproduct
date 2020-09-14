define({ "api": [
  {
    "type": "post",
    "url": "/api/address/add",
    "title": "添加地址",
    "name": "postAddressAdd",
    "group": "address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>收货人手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "provice",
            "description": "<p>省</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>市</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "county",
            "description": "<p>区/县</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressDetail",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isDefault",
            "description": "<p>默认地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>可以通过 头信息传递</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response",
            "description": "<p>res.send({ code: '200', message: '更新所有的选中和非选中状态', })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/address/add"
      }
    ],
    "version": "0.0.0",
    "filename": "api/address.js",
    "groupTitle": "address"
  },
  {
    "type": "post",
    "url": "/api/address/addressList",
    "title": "获取收货地址列表",
    "name": "postAddressList",
    "group": "address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>可以通过 头信息传递</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response",
            "description": "<p>res.send({ code: '200', message: '获取收货地址列表', data })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/address/addressList"
      }
    ],
    "version": "0.0.0",
    "filename": "api/address.js",
    "groupTitle": "address"
  },
  {
    "type": "post",
    "url": "/api/address/defaultAddress",
    "title": "获取默认收货地址",
    "name": "postDefaultAddress",
    "group": "address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isDefault",
            "description": "<p>默认地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response",
            "description": "<p>res.send({ code: '200', message: '获取默认地址', data })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/address/defaultAddress"
      }
    ],
    "version": "0.0.0",
    "filename": "api/address.js",
    "groupTitle": "address"
  },
  {
    "type": "post",
    "url": "/api/address/deleteAddress",
    "title": "获取收货地址列表",
    "name": "postDeleteAddress",
    "group": "address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressid",
            "description": "<p>地址id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response",
            "description": "<p>res.send({ code: '200', message: '删除成功', })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/address/deleteAddress"
      }
    ],
    "version": "0.0.0",
    "filename": "api/address.js",
    "groupTitle": "address"
  },
  {
    "type": "get",
    "url": "/api/banner",
    "title": "获取轮播图数据",
    "name": "GetApiBanner",
    "group": "banner",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response:",
            "description": "<p>res.send({ code: '200', message: '获取轮播图数据', data })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/banner"
      }
    ],
    "version": "0.0.0",
    "filename": "api/banner.js",
    "groupTitle": "banner"
  },
  {
    "type": "post",
    "url": "/api/cart",
    "title": "购物车数据",
    "name": "postCart",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>可以通过 头信息传递</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response:",
            "description": "<p>res.send({ code: '200', message: '购物车数据', data })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/cart"
      }
    ],
    "version": "0.0.0",
    "filename": "api/cart.js",
    "groupTitle": "cart"
  },
  {
    "type": "post",
    "url": "/api/cart/add",
    "title": "加入购物车",
    "name": "postCartAdd",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "proid",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "num",
            "description": "<p>数量，默认值为1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>可以通过头信息传递</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response",
            "description": "<p>res.send({ code: '200', message: '加入购物车成功', })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/cart/add"
      }
    ],
    "version": "0.0.0",
    "filename": "api/cart.js",
    "groupTitle": "cart"
  },
  {
    "type": "post",
    "url": "/api/cart/add",
    "title": "删除购物车数据",
    "name": "postCartDelete",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cartid",
            "description": "<p>购物车id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>可以通过头信息传递</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response",
            "description": "<p>res.send({ code: '200', message: '删除购物车数据', })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/cart/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "api/cart.js",
    "groupTitle": "cart"
  },
  {
    "type": "post",
    "url": "/api/cart/updateAllFlag",
    "title": "更新所有的选中和非选中状态",
    "name": "postCartUpdateAllFlag",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "checked",
            "description": "<p>全选的，选中状态</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>可以通过 头信息传递</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response",
            "description": "<p>res.send({ code: '200', message: '更新所有的选中和非选中状态', })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/cart/updateAllFlag"
      }
    ],
    "version": "0.0.0",
    "filename": "api/cart.js",
    "groupTitle": "cart"
  },
  {
    "type": "post",
    "url": "/api/cart/updateFlag",
    "title": "更新单个选中的状态",
    "name": "postCartUpdateFlag",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cartid",
            "description": "<p>购物车id</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "checked",
            "description": "<p>全选的，选中状态</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>可以通过 头信息传递</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response",
            "description": "<p>res.send({ code: '200', message: '更新所有的选中和非选中状态', })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/cart/updateFlag"
      }
    ],
    "version": "0.0.0",
    "filename": "api/cart.js",
    "groupTitle": "cart"
  },
  {
    "type": "post",
    "url": "/api/cart/updateNum",
    "title": "更新购物车数据",
    "name": "postCartUpdateNum",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cartid",
            "description": "<p>购物车id</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "num",
            "description": "<p>数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>可以通过头信息传递</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response",
            "description": "<p>res.send({ code: '200', message: '更新购物车数据', })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/cart/updateNum"
      }
    ],
    "version": "0.0.0",
    "filename": "api/cart.js",
    "groupTitle": "cart"
  },
  {
    "type": "post",
    "url": "/api/order/confirmOrderInfo",
    "title": "获取确认订单的数据列表",
    "name": "postConfirmOrderInfo",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "time",
            "description": "<p>时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>可以通过 头信息传递</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response:",
            "description": "<p>res.send({ code:'200', message:'获取确认订单的数据列表'， data })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/order/confirmOrderInfo"
      }
    ],
    "version": "0.0.0",
    "filename": "api/order.js",
    "groupTitle": "order"
  },
  {
    "type": "post",
    "url": "/api/order/deleteCartData",
    "title": "删除购物车的数据",
    "name": "postDeleteCartData",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>可以通过 头信息传递</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response:",
            "description": "<p>res.send({ code:'200', message:'删除购物车的数据'， })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/order/deleteCartData"
      }
    ],
    "version": "0.0.0",
    "filename": "api/order.js",
    "groupTitle": "order"
  },
  {
    "type": "post",
    "url": "/api/order/updateAddress",
    "title": "更新订单的地址",
    "name": "postUpdateAddress",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "time",
            "description": "<p>时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>可以通过 头信息传递</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response:",
            "description": "<p>res.send({ code:'200', message:'更新订单的地址'， })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/order/updateAddress"
      }
    ],
    "version": "0.0.0",
    "filename": "api/order.js",
    "groupTitle": "order"
  },
  {
    "type": "get",
    "url": "/api/pay/payment",
    "title": "生成支付二维码",
    "name": "GetPayment",
    "group": "pay",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>订单描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "out_trade_no",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "total_fee",
            "description": "<p>订单金额</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response:",
            "description": "<p>res.send({ code: '200', message: '生成支付的二维码', url })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/pay/payment"
      }
    ],
    "version": "0.0.0",
    "filename": "api/pay.js",
    "groupTitle": "pay"
  },
  {
    "type": "get",
    "url": "/api/pro",
    "title": "获取商品的列表数据",
    "name": "GetApiPro",
    "group": "pro",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>每页显示的个数,默认值为10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>页码，默认值为1</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response",
            "description": "<p>res.send({ code:'200', message:'获取商品的列表数据', data })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/pro"
      }
    ],
    "version": "0.0.0",
    "filename": "api/pro.js",
    "groupTitle": "pro"
  },
  {
    "type": "get",
    "url": "/api/pro/category",
    "title": "获取商品的分类数据",
    "name": "GetApiProCategory",
    "group": "pro",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response:",
            "description": "<p>res.send({ code: '200', message: '获取商品的分类数据', data })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/pro/category"
      }
    ],
    "version": "0.0.0",
    "filename": "api/pro.js",
    "groupTitle": "pro"
  },
  {
    "type": "get",
    "url": "/api/pro/detail",
    "title": "获取商品详情接口",
    "name": "GetApiProDetail",
    "group": "pro",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "proid",
            "description": "<p>产品id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response:",
            "description": "<p>res.send({ code: '10001', message: '查无此产品' }) res.send({ code: '200', message: '获取商品详情接口', data })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/pro/detail"
      }
    ],
    "version": "0.0.0",
    "filename": "api/pro.js",
    "groupTitle": "pro"
  },
  {
    "type": "get",
    "url": "/api/pro/categorybrand",
    "title": "获取分类下的品牌的数据",
    "name": "GetProCategorybrand",
    "group": "pro",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>分类名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response:",
            "description": "<p>res.send({ code: '200', message: '获取分类下的品牌的数据', data })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/pro/categorybrand"
      }
    ],
    "version": "0.0.0",
    "filename": "api/pro.js",
    "groupTitle": "pro"
  },
  {
    "type": "get",
    "url": "/api/pro/categorybrandlist",
    "title": "获取分类下的品牌的列表数据",
    "name": "GetProCategorybrandList",
    "group": "pro",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>分类名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "brand",
            "description": "<p>品牌</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response:",
            "description": "<p>res.send({ code: '200', message: '获取分类下的品牌的数据', data })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/pro/categorybrandlist"
      }
    ],
    "version": "0.0.0",
    "filename": "api/pro.js",
    "groupTitle": "pro"
  },
  {
    "type": "get",
    "url": "/api/search",
    "title": "搜索",
    "name": "ApiSearch",
    "group": "search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchText",
            "description": "<p>搜索关键词</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response:",
            "description": "<p>res.send({ code: '200', message: '搜索', data })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/search"
      }
    ],
    "version": "0.0.0",
    "filename": "api/search.js",
    "groupTitle": "search"
  },
  {
    "type": "post",
    "url": "/api/user/docheckdcode",
    "title": "注册：验证码验证",
    "name": "GetApiUserDocheckcode",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telCode",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response:",
            "description": "<p>res.send({ code:'200', message:'验证码验证成功' }) res.send({ code:'10004', message:'验证码验证失败' })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/user/docheckcode"
      }
    ],
    "version": "0.0.0",
    "filename": "api/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/api/user/docheckphone",
    "title": "注册：检测手机号",
    "name": "GetApiUserDocheckphone",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response:",
            "description": "<p>res.send({ code:'200', message:'可以继续注册' }) res.send({ code:'10002', message:'该用户已注册', tel:data[0].tel })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/user/docheckphone"
      }
    ],
    "version": "0.0.0",
    "filename": "api/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/api/user/domlogin",
    "title": "账户名登录：密码登录",
    "name": "GetApiUserDomlogin",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loginname",
            "description": "<p>账户名/手机号/邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response:",
            "description": "<p>res.send({ code: '10007', message: '密码错误' }) res.send({ code: '10005', message: '该用户还未注册' }) res.send({ code: '200', message: '登录成功', data: { userid: data1[0].userid, // token:  -----  后端校验登录的凭据 } })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/user/domlogin"
      }
    ],
    "version": "0.0.0",
    "filename": "api/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/api/user/dosendloginCode",
    "title": "登录：获取验证码",
    "name": "GetApiUserDosendloginCode",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response:",
            "description": "<p>res.send({ code: '200', message: '发送验证码成功' }) res.send({ code: '10005', message: '该用户还未注册' })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/user/dosendloginCode"
      }
    ],
    "version": "0.0.0",
    "filename": "api/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/api/user/dosendmsgcode",
    "title": "注册:发送短信验证码",
    "name": "GetApiUserDosendmsgcode",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response:",
            "description": "<p>res.send({ code:'200', message:'发送短信验证码成功', data:telCode //正常不传此值，为了方便测试 }) res.send({ code:'10003', message:'发送短信验证码失败' })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/user/dosendmsgcode"
      }
    ],
    "version": "0.0.0",
    "filename": "api/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/api/user/dosetpassword",
    "title": "注册结果，修改密码",
    "name": "GetApiUserDosetpassword",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response:",
            "description": "<p>res.send({ code:'200', message:'注册成功' })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/user/dosetpassword"
      }
    ],
    "version": "0.0.0",
    "filename": "api/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/api/user/dosmslogin",
    "title": "登录：验证码登录",
    "name": "GetApiUserDosmslogin",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telCode",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response:",
            "description": "<p>res.send({ code: '10006', message: '验证码错误' }) res.send({ code: '10005', message: '该用户还未注册' }) res.send({ code: '200', message: '登录成功', data: { userid: data1[0].userid, // token:  -----  后端校验登录的凭据 } })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/user/dosmslogin"
      }
    ],
    "version": "0.0.0",
    "filename": "api/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/api/user/getuserinfo",
    "title": "获取个人信息",
    "name": "getUserInfo",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "success-Response",
            "description": "<p>res.send({ code: '200', message: '个人信息', data })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/user/getUserInfo"
      }
    ],
    "version": "0.0.0",
    "filename": "api/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/api/order/add",
    "title": "添加订单信息",
    "name": "orderAdd",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>订单信息</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response:",
            "description": "<p>res.send({ code:'200', message:'添加订单信息'， data:time })</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/order/add"
      }
    ],
    "version": "0.0.0",
    "filename": "api/order.js",
    "groupTitle": "user"
  }
] });
