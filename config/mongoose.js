// 載入 mongoose
const mongoose = require('mongoose')

// 僅在開發環境使用 dotenv
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

// 連線到 mongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', ()=>{
    console.log('mongoDB error!')
})
// 連線成功
db.once('open', ()=>{
    console.log('mongoDB connected!')
})

// 匯出連線狀態
module.exports = db