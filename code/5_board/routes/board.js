var express =  require("express");
var router = express.Router();
var mysql = require("mysql2");
var moment = require("moment");
var msg = require("dialog");

var connection = mysql.createConnection({
    host : process.env.host, //127.0.0.1
    port : process.env.port,
    user : process.env.user,
    password : process.env.password,
    database : process.env.database
});

router.get("/",function(req,res){
    if(!req.session.logged){
        res.redirect("/login");
    }else{
        connection.query(
            `select * from board`,
            function(err, result){
                if(err){
                    console.log(err);
                    res.send("SQL connect Error");
                }else{
                    res.render("board_list",{
                        boards:result,
                        state:req.session.logged.name
                    });
                }
            }
        )
    }
})

router.get("/edit", function(req, res){
    if(!req.session.logged){
        res.redirect("/login");
    }else{
        var board_No=req.query.board_No;
        connection.query(
            `select * from board where No = ?`,
            [board_No],
            function(err, result){
                if(err){
                    console.log(err);
                    res.send("SQL connect Error");
                }else{
                    if(req.session.logged.post_id==result[0].post_id){
                        res.render("edit",{
                            board:result[0],
                            state:req.session.logged.name
                        });
                    }else{
                        res.render("err2",{err:1});   
                    }
                }
            }
        )
    }
})

router.post("/edit_2",function(req,res){
    if(!req.session.logged){
        res.redirect("/login");
    }else{
        var No=req.query.board_No;
        var post_id = req.body.post_id;
        var title = req.body.title;
        var content = req.body.content;
        var img = req.body.img;
        var date = moment().format("YYYYMMDD");
        var time = moment().format("HHmmss");

        if(req.session.logged.post_id==post_id){
            connection.query(
                `update board SET title=?,content=?,img=?,date=?,time=? WHERE No=?`,
                [title, content,img,date,time,No],
                function(err,result){
                    if(err){
                        console.log(err);
                        res.send("SQL insert Error");
                    }else{
                        res.redirect("/board/content?board_No="+No);
                    }
                }
            )
        }else{
            res.render("err2",{err:1});  
        }
    }
})

router.get("/content", function(req, res){
    if(!req.session.logged){
        res.redirect("/login");
    }else{
        var board_No=req.query.board_No;
        connection.query(
            `select * from board where No = ?`,
            [board_No],
            function(err, result){
                if(err){
                    console.log(err);
                    res.send("SQL connect Error");
                }else{
                    connection.query(
                        `select * from comment where parent_num = ?`,
                        [board_No],
                        function(err2,result2){
                            if(err2){
                                console.log(err2);
                                res.send("SQL select Error");
                            }else{
                                res.render("content",{
                                    board:result[0],
                                    post_id:req.session.logged.post_id,
                                    state:req.session.logged.name,
                                    opinion:result2
                                });
                            }
                        }
                    )
                }
            }
        )
    }
})

router.get("/write",function(req,res){
    if(!req.session.logged){
        res.redirect("/login");
    }else{
        res.render("write",{state:req.session.logged.name});
    }
})

router.post("/write_2",function(req,res){
    if(!req.session.logged){
        res.redirect("/login");
    }else{
        var title = req.body.title;
        var content = req.body.content;
        var img = req.body.img;
        var author = req.session.logged.name;
        var post_id = req.session.logged.post_id;
        var date = moment().format("YYYYMMDD");
        var time = moment().format("HHmmss");

        connection.query(
            `insert into board (title, content, img, author, post_id, date,time) values (?,?,?,?,?,?,?)`,
            [title, content, img, author, post_id,date,time],
            function(err,result){
                if(err){
                    res.redirect("/board/write");
                    res.send("SQL insert Error");
                }else{
                    res.redirect("/board");
                }
            }
        )
    }
})

router.get("/delete", function(req, res){
    if(!req.session.logged){
        res.redirect("/login");
    }else{
        var board_No=req.query.board_No;

        connection.query(
            `select * from board where No = ?`,
            [board_No],
            function(err, result){
                if(err){
                    console.log(err);
                }else{
                    var post_id=result[0].post_id;
                    console.log(post_id);

                    if(req.session.logged.post_id==post_id || req.session.logged.post_id=="manager"){
                        connection.query(
                            `delete from board where No = ?`,
                            [board_No],
                            function(err, result){
                                if(err){
                                    console.log(err);
                                    res.send("SQL connect Error");
                                }else{
                                    res.redirect("/board");
                                }
                            }
                        )
                    }else{
                        res.render("err2",{err:2});
                    }
                }
            }
        )
    }
})

router.post("/add_comment",function(req,res){
    if(!req.session.logged){
        res.redirect("/login");
    }else{
        var comment=req.body.comment;
        var post_id = req.session.logged.post_id;
        var name = req.session.logged.name;
        var parent_num = req.body.no;
        var date = moment().format("YYYYMMDD");
        var time = moment().format("HHmmss");

        connection.query(
            `insert into comment (parent_num, opinion, post_id, name, date, time) values (?,?,?,?,?,?)`,
            [parent_num, comment, post_id, name, date, time],
            function(err,result){
                if(err){
                    res.render("err2",{err:4});
                }else{
                    res.redirect("/board/content?board_No="+parent_num);
                }
            }
        )
    }
})

router.get("/delete_opinion", function(req, res){
    if(!req.session.logged){
        res.redirect("/login");
    }else{
        var opinion_No=req.query.No;

        connection.query(
            `select * from comment where No = ?`,
            [opinion_No],
            function(err, result){
                if(err){
                    console.log(err);
                }else{
                    var post_id=result[0].post_id;
                    var parent_num=result[0].parent_num;

                    if(req.session.logged.post_id==post_id || req.session.logged.post_id=="manager"){
                        connection.query(
                            `delete from comment where No = ?`,
                            [opinion_No],
                            function(err, result){
                                if(err){
                                    console.log(err);
                                    res.send("SQL connect Error");
                                }else{
                                    res.redirect("/board/content?board_No="+parent_num);
                                }
                            }
                        )
                    }else{
                        res.render("err2",{err:2});
                    }
                }
            }
        )
    }
})

router.get("/up_opinion", function(req, res){
    if(!req.session.logged){
        res.redirect("/login");
    }else{
        var opinion_No=req.query.No;
        var parent_num=req.query.parent_num;
        connection.query(
            `update comment SET up=up+1 WHERE No=?`,
            [opinion_No],
            function(err, result){
                if(err){
                    console.log(err);
                    res.send("SQL connect Error");
                }else{
                    res.redirect("/board/content?board_No="+parent_num);
                }
            }
        )
    }
})

router.get("/down_opinion", function(req, res){
    if(!req.session.logged){
        res.redirect("/login");
    }else{
        var opinion_No=req.query.No;
        var parent_num=req.query.parent_num;

        connection.query(
            `update comment SET down=down+1 WHERE No=?`,
            [opinion_No],
            function(err, result){
                if(err){
                    console.log(err);
                    res.send("SQL connect Error");
                }else{
                    res.redirect("/board/content?board_No="+parent_num);
                }
            }
        )
    }
})

module.exports = router;