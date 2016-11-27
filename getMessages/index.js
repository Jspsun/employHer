var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var request = require("request");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));


// app.set('port', (process.env.PORT || 5000));
// app.use(express.static(__dirname + '/public'));
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');



// app.get("/", function(req, res){
//     res.render("search");
// })

// app.get("/results", function(req, res){
//     var inputText = req.query.input;
//     client.get('search/tweets', { q:inputText , count: 100, lang: "en", resultType: "popular", exclude:"links"}, function(error, tweets, response) {
//         res.render("results", {resultsData: tweets, search:inputText});

//     });
// })

// app.get('/', function(request, response) {
//   response.render('pages/index');
// });

// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });

app.listen(8000, 'localhost', function(){
    console.log("server started");

});
