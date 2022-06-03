var express = require('express') //express variable stores a function call that makes an express application

var app = express() //make an express application (store the app in application)
var server = app.listen(3000)	

app.use(express.static('public'));
console.log("server running")

