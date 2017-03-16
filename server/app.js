var http = require('http');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/greeting', function(req, res){

    var callbackName = req.query.callback;
    console.log(callbackName);

    res.send(callbackName + "({" +
        "\"greeting\": \"Hello from Remote Server!\"," +
        "\"language\": \"en-US\"" +
    "});");

    // res.send({
    //     "greeting": "Hello from Remote Server!",
    //     "language": "en-US"
    // });
});

//--------创建服务端--------
http.createServer(app).listen('3000', function () {
    console.log('启动服务器完成');
});