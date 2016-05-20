var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine','ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname, 'bower_components')));

app.get('/', function(req, res) {
  res.render('index');
});


app.listen(process.env.PORT || 1212);
console.log('running running at port 1212')