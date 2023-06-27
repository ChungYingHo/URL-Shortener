// 載入 mongoose
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const urlSchema = new Schema({
    origin: {
        type: String,
        required: true
    },
    transfer: {
        type: String
    }
})

// 匯出資料型態
module.exports = mongoose.model('URL', urlSchema)