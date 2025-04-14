if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const path = require('path')
const fileUpload = require('express-fileupload')
const ejs = require('ejs')
const db = require('./routes/db-config')
const bcrypt = require('bcryptjs')
const cookie = require('cookie-parser')
const jwt = require('jsonwebtoken')
const mysql = require('mysql')
const app = express()
const port = process.env.PORT

app.use('/js', express.static(__dirname + '/public/assets/js'))
app.use('/css', express.static(__dirname + '/public/assets/css'))
app.use('/template-css', express.static(__dirname + '/public/templates/template-css'))
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(cookie())
app.use(express.json())
app.use(fileUpload())

// db.connect((err) => {
//     if(err) throw err
//     console.log('DB Connected!');
// })



app.use('/', require('./routes/pages').router)
app.use('/api', require('./controllers/validate'))
app.use('/api', require('./controllers/auth'))


app.listen(port, ()=> console.log(`Server started on port: ${port}`))

