const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

require('./database-connection')

const app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.set('view engine', 'pug')
app.set('views', `${__dirname}/views`)

const person = require('./routes/person')

app.use('/person', person)

app.get('/', (req, res, next) => {
    res.render('index')
})

module.exports = app
