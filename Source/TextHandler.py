from Sender import Sender
from Message import Message


class TextHandler(object):
    sendBot = Sender()

    # name
    # job
    def process(self):
        i = 0

    # name
    def processName(self, message, phoneNumber):
        messageItem = Message()

        messageItem.senderName = message
        messageItem.senderNo = phoneNumber

        # responds
        TextHandler.sendBot.send(
            "Hi " + messageItem.senderName + ". Your phone number is " + messageItem.senderNo + " What Jobs are you interested in?")
        return messageItem

    def processJobs(self, message, phoneNumber):
        messageItem = Message()
