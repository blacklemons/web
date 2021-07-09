var express = require("express");
var session = require("express-session");
var app = express();
var port = 3000;
require('dotenv').config();

var path = require("path");

app.set("views", __dirname + "/views");
app.set("view engine","ejs");

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static("public"));
app.use(session({
    secret : process.env.session_secret,
    resave : false,
    saveUninitialized : true,
    maxAge : 3600000
})
);

app.get("/test",function(req,res){
    res.render("j_query_test");
})

var main = require("./routes/main");
app.use("/",main);

var login = require("./routes/login");
app.use("/login",login);

var board = require("./routes/board");
app.use("/board",board);

var server = app.listen(port,function(){
    console.log("Web server start");
})
