function TextHandler(){
  this.sendBot=Sender();

  //name
  //job
  //description

  this.process=function(message, phoneNumber){
    newMessage=message.split().slice(1,message.length).join();

    if (message.split()[0].toLowerCase()==="name: "){
      this.processName(newMessage,phoneNumber);
    }
    else if (message.split()[0].toLowerCase()==="jobs: "){
      this.processDescription(newMessage,phoneNumber);
    }
    else{
      this.processDescription(self, message, phoneNumber);
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
  this,processDescription=function(message, phoneNumber){
    var messageItem=new Message();
    messageItem.senderNo= phoneNumber
    messageItem.description=message;

    //responds
    this.sendBot.send("Your Profile: " + messageItem.description,messageItem.senderNo);
    return messageItem;
  }
}
