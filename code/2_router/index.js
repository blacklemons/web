var express = require("express");
var app = express();

var path = require("path");
// var session =  require("express-session");

app.set("views", __dirname + "/views");
app.set('view engine','ejs');

app.use(express.json());                        // POST를 위해 json 형식을 받을 수 있도록 함
app.use(express.urlencoded({extended:false}));  // express의 body-parser모듈을 사용한 것인데 그 중 urlencoded을 통함
                                                // body-parser모듈을 사용하는것은 POST를 할때 body를 사용하기 때문인것 같다
                                                // url-encoded는 주소형식으로 데이터를 보내는 방식
                                                // true 를 하면 qs 모듈을 사용하고, false 면 query-string 모듈을 사용

//app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public/css")));

// const apiRouter = require('./routes/main')
// app.use('/',apiRouter);

var main = require('./routes/main')();
app.use('/',main);

var server = app.listen(3000,function(){
    console.log("Express server has started on port 3000");
})