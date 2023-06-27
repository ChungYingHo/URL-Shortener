// 引用 express 與 express 路由器
const express = require('express')
const router = express.Router()

// 載入 function 和 model
const urlShortener = require('../../utils/urlShortener')
const url = require('../../models/url')

// 建立路由
router.get('/', (req, res)=>{
    url.find()
    .lean()
    .then(res.render('index'))
    .catch(error => console.error(error))
})

router.post('/shortener', (req, res)=>{
    const originURL = req.body.url
    return url.create({ origin: `${originURL}` })
    .then(() => res.render('shortener', {originURL}))
    .catch(error => console.log(error))
    // res.render('shortener', { originURL })
    // console.log(typeof originURL)
})
// 匯出路由模組
module.exports = router