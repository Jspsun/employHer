var twilio = require('twilio');
var firebase = require('firebase');
var app = firebase.initializeApp({ apiKey: "AIzaSyB-aHO2JYOcvFmjuifuHVDpF_GAOWRGQ58",
        authDomain: "breakinequality.firebaseapp.com",
        databaseURL: "https://breakinequality.firebaseio.com",
        storageBucket: "breakinequality.appspot.com",
        messagingSenderId: "690173784028" });
        

function Sender(){
// Find your account sid and auth token in your Twilio account Console.
  this.client = twilio('AC9f4dc30b29b932a901627da4c92a38a4', '0c85242dcc5c50703f691d66fb1d931e');

  this.send=function(message, phoneNumber){

    // Send the text message.
    this.client.sendMessage({
      to: phoneNumber,
      from: '16475601733',
      body: message
    });
  }
}

function Message(){
this.senderNo=null;
senderName=null;
jobs=null;
description=null;
}
function TextHandler(){
  this.sendBot=new Sender();

  //name
  //job
  //description

  this.process=function(message, phoneNumber){
    //newMessage=message.split().slice(1,message.length).join();

    //Name LastName: Jobs,s,s,s,s
    var firstSplit=message.split(":");
    var name=firstSplit[0];
    name=name.trim();
    var jobList=firstSplit[1];
    jobList=jobList.trim();
    jobList=jobList.toLowerCase();

    firebase.database().ref("applicants").child(jobList).push().set({"name": name, "number": phoneNumber});

    this.sendBot.send("Hi "+ name+". Your job listing will be posted shortly: "+ jobList, phoneNumber);






    // if (message.split(" ")[0].toLowerCase()==="name:"){
    //   this.processName(newMessage,phoneNumber);
    // }
    // else if (message.split(" ")[0].toLowerCase()==="jobs:"){
    //   this.processJobs(newMessage,phoneNumber);
    // }
    // else{
    //   this.processDescription(message, phoneNumber);
    //       console.log(message.split(" "));
    // }
  }

  //name
//   this.processName=function(message,phoneNumber){
//     var messageItem=new Message();
//
//     messageItem.senderName=message;
//     messageItem.senderNo=phoneNumber;
//
//     //responds
//     this.sendBot.send("Hi "+ messageItem.senderName+"("+messageItem.senderNo+ "). What jobs are you interested in?", messageItem.senderNo);
//     return messageItem;
//   }
//   this.processJobs=function(message, phoneNumber){
//     var messageItem=new Message();
//     messageItem.senderNo=phoneNumber;
//     messageItem.jobs= message.split();
//
//
//
//     //responds
//     this.sendBot.send("You are interested in: "+ messageItem.jobs.join(), phoneNumber);
//     return messageItem;
//   }
//   this.processDescription=function(message, phoneNumber){
//     var messageItem=new Message();
//     messageItem.senderNo= phoneNumber
//     messageItem.description=message;
//
//     //responds
//     this.sendBot.send("Your Profile: " + messageItem.description,messageItem.senderNo);
//     return messageItem;
//   }
}


var text;
var number;
var express = require('express');
var engines = require('consolidate');
var bodyParser = require('body-parser');
console.log("hello");
var app = express();
var textHandlerBot=new TextHandler();
app.use(bodyParser.urlencoded({extended: false}));

app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get("/", function (request, response) {
  response.render("index.html");
});


app.post("/message", function (request, response) {
  console.log(request.body.Body);
  text = request.body.Body;
  
  console.log(request.body.From);
  console.log(request.body);
  number = request.body.From;
  response = textHandlerBot.process(text, number);
});











// console.log("hello")

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
