from twilio import TwilioRestException
from twilio.rest import TwilioRestClient

# Your Account SID from www.twilio.com/console
account_sid = "AC25b54868cc856f982bc08b14ee016fdd"
# Your Auth Token from www.twilio.com/console
auth_token = "e1575b5ad1c2a2130715b1d04ea42622"

client = TwilioRestClient(account_sid, auth_token)
try:
    # Replace with your Twilio number
    message = client.messages.create(
        body="----------------------", to="6477747865", from_="6473615601")
except TwilioRestException as e:
    print(e)

# print(message.sid)
