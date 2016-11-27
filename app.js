var express = require('express');
var bodyParser = require('body-parser');
console.log("hello");
var app = express();

app.use(bodyParser.urlencoded({extended: false})); 

app.set('views', __dirname + '/views');


app.get("/", function (request, response) {
  response.render("views/index.html");
});


app.post("/message", function (request, response) {
  console.log(request.body.Body);
  console.log(request.body.From);  
  
});



// console.log("hello")

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
