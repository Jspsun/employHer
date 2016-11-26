from twilio import TwilioRestException
from twilio.rest import TwilioRestClient


class Sender(object):
    # Your Account SID from www.twilio.com/console

    # filler stuff
    account_sid = 1
    # Your Auth Token from www.twilio.com/console
    auth_token = 1

    client = TwilioRestClient(account_sid, auth_token)

    def __init__(self):
        account_sid = "AC25b54868cc856f982bc08b14ee016fdd"
        auth_token = "e1575b5ad1c2a2130715b1d04ea42622"
        client = TwilioRestClient(account_sid, auth_token)

    def send(self, message):

        try:
            # Replace with your Twilio number
            Sender.message = Sender.client.messages.create(
                body=message, to="6477747865", from_="6473615601")
        except TwilioRestException as e:
            print(e)

        # print(message.sid)
