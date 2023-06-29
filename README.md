# **URL Shortener**
## **介紹 (About)**
這是一個簡單又清爽的 **"短網址產生器"**，可以幫助你把長長的網址變成足夠精簡的短網址。
## **專案示意圖 (Diagram)**
![](./public/images/screenshot.png)
## **功能列表 (Features)**
* 輸入網址後點擊 **"Shorten"** 或按下 **"Enter"** 即會產生一組 **"http://localhost:3000/ + 5位亂碼"** 的短網址。
* 直接點擊 **"短網址"** 可以直接開啟分頁連結到原網址。
* 點擊 **"Copy"** 按鈕後可以一鍵複製短網址。
* 相同的**長網址**會產生相同的**短網址**。
## **專案安裝 (Installation)**
1. 請先確認是否已有安裝 node.js 與 npm。
2. 打開 Terminal 複製此專案到本機電腦
```
git clone https://github.com/ChungYingHo/URL-Shortener.git
```
3. 在 Terminal 中前往此專案資料夾
```
cd URL-Shortener
```
4. 安裝 npm 套件
```
npm install
```
5. 安裝 nodemon
```
npm install nodemon
```
6. 在專案路徑下新增 **.env** 檔案，輸入你自己的 MongoDB 的連線字串。
```
MONGODB_URI = "<你的連線字串>"
```
7. 開啟程式
```
npm run dev
```
8. 當Terminal顯示 `The app is running on http://localhost:3000` 以及 `mongoDB connected!` 時表示程式開啟成功。
9. 打開瀏覽器，前往 http://localhost:3000 以檢視專案成果。
## **環境建置與開發工具 (Prerequisites)**
1. **node.js** / 14.16.0
2. **express** / 4.17.1
3. **mongoose** / 5.9.7
4. **express-Handlebars** / 5.3.3
5. **method-override** / 3.0.0
6. **body-parser** / 1.20.2
7. **dotenv** / 16.3.1