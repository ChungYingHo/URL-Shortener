// 引用 express 與 express 路由器
const express = require('express')
const router = express.Router()

// 載入資料 model
const db = require('../../models')
const Url = db.Url

// 建立路由
router.get('/:shorterUrl', async (req, res)=>{
    try{
        const shorterUrl = req.params.shorterUrl
        const data = await Url.findOne({ where: { transfer: shorterUrl } })
        res.redirect(data.origin)
    }catch(error){
        console.log(error)
    }
})

// 匯出路由
module.exports = router