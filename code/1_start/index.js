var express = require("express");
var app = express();

app.set("views", __dirname + "/views");
app.set('view engine','ejs');


var main = require('.routes/main')();
app.use('/',main);

var server = app.listen(3000,function(){
    console.log("Express server has started on port 3000");
})