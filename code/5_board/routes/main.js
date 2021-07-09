var express =  require("express");
var router = express.Router();
var mysql = require("mysql2");
var moment = require("moment");

var connection = mysql.createConnection({
    host : process.env.host, //127.0.0.1
    port : process.env.port,
    user : process.env.user,
    password : process.env.password,
    database : process.env.database
});

router.get("/",function(req,res){
    if(!req.session.logged){
        res.render("main",{
            state:"none"
        });
    }else{
        res.render("main",{
            state:req.session.logged.name
        });
    }
})

router.get("/nav",function(req,res){
    res.render("nav_bar");
})

router.get("/err2",function(req,res){
    var err=req.query.err;
    res.render("err2",{err:err});
})

module.exports = router;