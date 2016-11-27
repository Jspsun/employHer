var twilio = require('twilio');

function Sender(){
// Find your account sid and auth token in your Twilio account Console.
  this.client = twilio('AC25b54868cc856f982bc08b14ee016fdd', 'e1575b5ad1c2a2130715b1d04ea42622');

  this.send=function(message, phoneNumber){

    // Send the text message.
    client.sendMessage({
      to: phoneNumber,
      from: '6473615601',
      body: message
    });
  }
}
