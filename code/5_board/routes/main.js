var express =  require("express");
var router = express.Router();
var mysql = require("mysql2");

var connection = mysql.createConnection({
    host : "localhost", //127.0.0.1
    port : 3306,
    user : "root",
    password : "1234",
    database : "test"
});

router.get("/",function(req,res,next){
    connection.query(
        `select * from board`,
        function(err, result){
            if(err){
                console.log(err);
                res.send("SQL connect Error");
            }else{
                res.render("board_list",{boards:result});
            }
        }
    )
})

router.get("/edit", function(req, res){
    var board_No=req.query.board_No;
    connection.query(
        `select * from board where No = ?`,
        [board_No],
        function(err, result){
            if(err){
                console.log(err);
                res.send("SQL connect Error");
            }else{
                res.render("edit",{board:result[0]});
            }
        }
    )
})

router.post("/edit_2",function(req,res,next){
    var board_No=req.query.board_No;
    var No = board_No;
    var title = req.body.title;
    var content = req.body.content;
    connection.query(
        `update board SET title=?,content=? WHERE No=?`,
        [title, content,No],
        function(err,result){
            if(err){
                console.log(err);
                res.send("SQL insert Error");
            }else{
                res.redirect("/");
            }
        }
    )
})

router.get("/content", function(req, res){
    var board_No=req.query.board_No;

    connection.query(
        `select * from board where No = ?`,
        [board_No],
        function(err, result){
            if(err){
                console.log(err);
                res.send("SQL connect Error");
            }else{
                res.render("content",{board:result[0]});
            }
        }
    )
})


router.get("/write",function(req,res,next){
    res.render("write");
})

router.post("/write_2",function(req,res,next){
    var title = req.body.title;
    var content = req.body.content;
    connection.query(
        `insert into board (title, content) values (?,?)`,
        [title, content],
        function(err,result){
            if(err){
                res.redirect("/write");
                res.send("SQL insert Error");
            }else{
                res.redirect("/");
            }
        }
    )
})

router.get("/delete", function(req, res){
    var board_No=req.query.board_No;

    connection.query(
        `delete from board where No = ?`,
        [board_No],
        function(err, result){
            if(err){
                console.log(err);
                res.send("SQL connect Error");
            }else{
                res.redirect("/");
            }
        }
    )
})

module.exports = router;