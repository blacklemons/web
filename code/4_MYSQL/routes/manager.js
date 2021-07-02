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

router.get("/search", function(req, res, next){
    car_id=req.query.car_id;
    connection.query(
        `select * from car_list where car_id = ?`,
        [car_id],
        function(err, result){
            if(err){
                console.log(err);
                res.send("SQL connect Error");
            }else{
                res.render("car_info",{car:result[0]});
            }
        }
    )
})


router.get("/add_car", function(req, res, next){
    res.render("add_car");
})

router.post("/add_car2",function(req,res,next){
    var car_id = req.body.car_id;
    var car_div = req.body.car_div;
    var car_type = req.body.car_type;
    var car_birth = req.body.car_birth;
    console.log(car_id, car_div, car_type, car_birth);
    connection.query(
        `select * from car_list where car_id = ?`,
        [car_id],
        function(err, result){
            if(err){
                console.log(err);
                res.send("SQL connect Error");
            }else{
                if(result.length>0){
                    res.send("이미 존재하는 Car_ID");
                }else{
                    connection.query(
                        `insert into car_list (car_id, car_div, car_type, car_birth) values (?,?,?,?)`,
                        [car_id, car_div, car_type, car_birth],
                        function(err2,result2){
                            if(err2){
                                console.log(err2);
                                res.send("SQL insert Error");
                            }else{
                                res.render("manager");
                            }
                        }
                    )
                }
            }
        }
    )
})

router.get("/car_list", function(req, res, next){
    connection.query(
        `select * from car_list`,
        function(err,result){
            if(err){
                console.log(err);
                res.send("SQL Connect ERROR");
            }else{
                res.render("car_list",{cars:result});
            }
        }
    )
})

module.exports = router;