const express = require('express')
const app = express()
const doMath = require('./math')
var bodyParser = require('body-parser')

// index route//
app.get('/', doMath())

app.listen(3000)

