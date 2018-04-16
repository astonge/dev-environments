var express = require('express');
// var body-parser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/jquery',express.static(__dirname + '/node_modules/jquery'));
app.use('/popper',express.static(__dirname + '/node_modules/popper.js/dist'));
app.use('/assets',express.static(__dirname + '/public/'));

app.set('views',__dirname + '/views');
app.set('view engine','ejs');

app.get('/', function(req,res) {
  res.render('index');
});

app.listen(4000);
console.log('STARTING SERVER http://127.0.0.1:4000');