/*
 * @Descripttion: 
 * @version: 
 * @Author: lujj
 * @Date: 2020-08-08 16:23:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-09 21:12:37
 */
const sql=require('./index')
const Admin=require('./col/Admin')
const md5=require('md5')
const insertData=[
    {
        adminid:'admin_0001',
        adminname:'admin',
        password:md5('123456'),
        role:2
    },
    {
        adminid:'admin_0002',
        adminname:'lujiajing',
        password:md5('123456'),
        role:1
    }
]
sql.insert(Admin,insertData).then(()=>{
    console.log('插入账户成功')
})