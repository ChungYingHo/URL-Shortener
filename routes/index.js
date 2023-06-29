// * 總路由器
// 引用 express 與 express 路由器
const express = require('express')
const router = express.Router({ mergeParams: true })

// 引用 home 模組
const home = require('./modules/home')

// 引用 shorterUrl 模組
const shorterUrl = require('./modules/shorterUrl')

// 將網址結構符合 / 字串的 request 導向 home 模組
router.use('/', home)

// 導向 shorterUrl 模組
router.use(shorterUrl)

// 匯出路由器
module.exports = router