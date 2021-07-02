var express = require("express");
var app = express();
var port = 3000;

var path = require("path");

app.set("views", __dirname + "/views");
app.set("view engine","ejs");

var server = app.listen(port)

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("index");
})

app.get("/second",function(req,res){
    res.render("second");
})

app.get("/third",function(req,res){
    res.render("third");
})