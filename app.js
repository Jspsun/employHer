var express = require('express');
var bodyParser = require('body-parser');
console.log("hello");
var app = express();

// app.use(bodyParser.urlencoded({extended: false})); 
// app.set('port', (process.env.PORT || 5000));
// app.use(express.static(__dirname + '/public'));
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

// app.get("/", function (request, response) {
//   console.log("hello")
// });


// app.post("/message", function (request, response) {
//   console.log(request.body.Body);
//   console.log(request.body.From);  
  
// });



// console.log("hello")

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
