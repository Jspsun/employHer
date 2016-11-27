from Sender import Sender
from Message import Message


class TextHandler(object):
    sendBot = Sender()

    # name jobs,
    def process(self, message):
        messageItem = Message()
        TextHandler.parseInitial(self, message, messageItem)
        TextHandler.sendBot.send("Hi " + messageItem.senderName)
        return messageItem

    def parseInitial(self, message, messageItem):
        tokens = message.split()
        messageItem.senderName = tokens[0]
