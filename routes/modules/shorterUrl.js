// 引用 express 與 express 路由器
const express = require('express')
const router = express.Router()

// 載入資料 model
const url = require('../../models/url')

// 建立路由
router.get('/:shorterUrl', (req, res)=>{
    const shorterUrl = req.params.shorterUrl
    url.findOne({transfer: shorterUrl})
    .lean()
    .then(data => res.redirect(data.origin))
    .catch(error => console.log(error))
})

// 匯出路由
module.exports = router