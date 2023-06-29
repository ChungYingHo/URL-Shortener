// 引用 express 與 express 路由器
const express = require('express')
const router = express.Router()

// 載入 function 和 model
const urlShortener = require('../../utils/urlShortener')
const validation = require('../../utils/validation')
const url = require('../../models/url')

// 建立路由
router.get('/', (req, res)=>{
    res.render('index')
})

router.post('/shortener', (req, res)=>{
    const originUrl = req.body.url

    if(!validation(originUrl)){
        res.send('It is not a valid URL! Please try again.')
        return res.redirect('/')
    }

    url.findOne({origin: originUrl})
    .lean()
    .then(data =>{
        if(data){
            res.render('shortener', {transfer: data.transfer})
        }else{
            const shorterUrl = urlShortener()
            url.create({origin: originUrl, transfer: shorterUrl})
            .then(() => res.render('shortener', { transfer: shorterUrl }))
                .catch(error => console.log(error))
        }
})
})

// 匯出路由模組
module.exports = router