// 引用 express 與 express 路由器
const express = require('express')
const router = express.Router()

// 建立路由
router.get('/', (req, res) => {
    res.render('shortener')
})

// 匯出路由模組
module.exports = router