// 引用 express 與 express 路由器
const express = require('express')
const router = express.Router()

// 載入 function 和 model
const urlShortener = require('../../utils/urlShortener')
const db = require('../../models')
const Url = db.Url

// 建立路由
router.get('/', (req, res)=>{
    res.render('index')
})

router.post('/shortener', async (req, res)=>{
    try{
        const originUrl = req.body.url
        const data = await Url.findOne({where: {origin: originUrl}})
        if(data){
            res.render('shortener', {transfer: data.transfer})
        }else{
            const shorterUrl = urlShortener()
            Url.create({origin: originUrl, transfer: shorterUrl})
            .then(() => res.render('shortener', { transfer: shorterUrl }))
            .catch(error => console.log(error))
        }
    }catch (error){
        console.log(error)
    }
})

// 匯出路由模組
module.exports = router