// var http = require('http');
var express    = require('express');        // call express
var app        = express();


app.get('/home', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

app.listen(8080, '127.0.0.1');

/*
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end('Hello World\n');


}).listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');
*/
