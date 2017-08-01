// server.js
// the app starts here

// init project
var john = require('./john.js');
var express = require('express');

// express app
var app = express();

// serve static files
app.use(express.static(__dirname + '/public'));

// homepage
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// new john
app.get("/john", function (req, res) {
  res.send(john())
});

// happy johns!
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Running on port ' + listener.address().port);
});
