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




var textHandlerBot=new TextHandler();
textHandlerBot.process("Name: Jonathan Sun", "6477747865")
textHandlerBot.process("Jobs: memes learning", "6477747865")
textHandlerBot.process("I like to write code", "6477747865")

function TextHandler(){
  this.sendBot=new Sender();

  //name
  //job
  //description

  this.process=function(message, phoneNumber){
    newMessage=message.split().slice(1,message.length).join();

    if (message.split()[0].toLowerCase()==="name: "){
      this.processName(newMessage,phoneNumber);
    }
    else if (message.split()[0].toLowerCase()==="jobs: "){
      this.processJobs(newMessage,phoneNumber);
    }
    else{
      this.processDescription(message, phoneNumber);
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

function Message(){
this.senderNo=null;
senderName=null;
jobs=null;
description=null;
}
