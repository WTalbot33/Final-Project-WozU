//server/server.js
var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var MGDBURL = 'mongodb://sadvarsco:themaxx1234@ds251022.mlab.com:51022/expenses';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

console.log("connection error 4");
mongoose.connect(MGDBURL,{ useNewUrlParser: true });

app.use('/', router);

module.exports=app;