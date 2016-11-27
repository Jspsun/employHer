var app = express();

app.use(bodyParser.urlencoded({extended: false})); 

app.post("/message", function (request, response) {
  console.log(request.body.Body);
  console.log(request.body.From);  
  
});


console.log("hello")

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});