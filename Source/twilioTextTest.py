from twilio.rest import TwilioRestClient

account_sid = "{{ AC9f4dc30b29b932a901627da4c92a38a4 }}" # Your Account SID from www.twilio.com/console
auth_token  = "{{ 0c85242dcc5c50703f691d66fb1d931e }}"  # Your Auth Token from www.twilio.com/console

client = TwilioRestClient(account_sid, auth_token)

message = client.messages.create(body="Hello from Python",
    to="+16479831888",    # Replace with your phone number
    from_="+16475601733") # Replace with your Twilio number

print(message.sid)

