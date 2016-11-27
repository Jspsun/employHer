var twilio = require('twilio');

function Sender(){
// Find your account sid and auth token in your Twilio account Console.
  this.client = twilio('AC25b54868cc856f982bc08b14ee016fdd', 'e1575b5ad1c2a2130715b1d04ea42622');

  this.send=function(message, phoneNumber){

    // Send the text message.
    this.client.sendMessage({
      to: phoneNumber,
      from: '6473615601',
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
    newMessage=message.split().slice(1,message.length).join();

    if (message.split()[0].toLowerCase()==="name:"){
      this.processName(newMessage,phoneNumber);
    }
    else if (message.split()[0].toLowerCase()==="jobs:"){
      this.processJobs(newMessage,phoneNumber);
    }
    else{
      this.processDescription(message, phoneNumber);
          console.log(message.split()[0].toLowerCase());
    }
  }

  //name
  this.processName=function(message,phoneNumber){
    var messageItem=new Message();

    messageItem.senderName=message;
    messageItem.senderNo=phoneNumber;

    //responds
    this.sendBot.send("Hi "+ messageItem.senderName+"("+messageItem.senderNo+ "). What jobs are you interested in?", messageItem.senderNo);
    return messageItem;
  }
  this.processJobs=function(message, phoneNumber){
    var messageItem=new Message();
    messageItem.senderNo=phoneNumber;
    messageItem.jobs= message.split();



    //responds
    this.sendBot.send("You are interested in: "+ messageItem.jobs.join(), phoneNumber);
    return messageItem;
  }
  this.processDescription=function(message, phoneNumber){
    var messageItem=new Message();
    messageItem.senderNo= phoneNumber
    messageItem.description=message;

    //responds
    this.sendBot.send("Your Profile: " + messageItem.description,messageItem.senderNo);
    return messageItem;
  }
}



var text;
var number;
var express = require('express');
var engines = require('consolidate');
var bodyParser = require('body-parser');
console.log("hello");
var app = express();

app.use(bodyParser.urlencoded({extended: false})); 

app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get("/", function (request, response) {
  response.render("index.html");
});


app.post("/message", function (request, response) {
  console.log(request.body.Body);
  name = request.body.Body;
  console.log(request.body.From);  
  number = request.body.From;
});

var textHandlerBot=new TextHandler();


textHandlerBot.process(text, "6477747865")






// console.log("hello")

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
