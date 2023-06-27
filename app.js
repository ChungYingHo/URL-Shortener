// 引用各項套件
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// 引用 express、路由器、mongoose.js
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes')
require('./config/mongoose')

// 設定 handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// 使用套件與路由器
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(routes)

// 啟動監聽伺服器
app.listen(port, ()=>{
    console.log(`The app is running on http://localhost:${port}`)
})