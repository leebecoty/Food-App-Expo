const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user-router');


app.set('view engine', 'ejs');

let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(urlencodedParser)
app.use(jsonParser)
app.use(cors());

app.use('/', userRouter)


module.exports = app