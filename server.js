var express = require('express');
var path = require('path')

var app = express();
var port = process.env.PORT || 8080;


const newPath = path.join(__dirname,'/')
app.use(express.static(newPath));

app.get('/', function(req, res){
    res.sendfile('index.html');
});

app.listen(port, function(){
    console.log('Server is running on ' + port);
});