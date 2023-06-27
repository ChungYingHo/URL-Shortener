// * 總路由器
// 引用 express 與 express 路由器
const express = require('express')
const router = express.Router()

// 引用 home 模組
const home = require('./modules/home')

// 引用 shortener 模組
// const shortener = require('./modules/shortener')

// 將網址結構符合 / 字串的 request 導向 home 模組
router.use('/', home)

// 將網址結構符合 /shortener 字串開頭的 request 導向 shortener 模組 
// router.use('/shortener', shortener)

// 匯出路由器
module.exports = router