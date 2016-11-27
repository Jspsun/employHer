from Sender import Sender
from Message import Message


class TextHandler(object):
    sendBot = Sender()

    # name
    # job
    def process(self, message, phoneNumber):
        newMessage = ' '.join(message.split()[1:])

        if message.split()[0].lower() == "name:":
            TextHandler.processName(self, newMessage, phoneNumber)
        elif message.split()[0].lower() == "jobs:":
            TextHandler.processJobs(self, newMessage, phoneNumber)
        else:
            TextHandler.processDescription(self, message, phoneNumber)

    # name
    def processName(self, message, phoneNumber):
        messageItem = Message()

        messageItem.senderName = message
        messageItem.senderNo = phoneNumber

        # responds
        TextHandler.sendBot.send(
            "Hi " + messageItem.senderName + "(" + messageItem.senderNo + "). What Jobs are you interested in?", messageItem.senderNo)
        return messageItem

    def processJobs(self, message, phoneNumber):
        messageItem = Message()

        messageItem.senderNo = phoneNumber
        messageItem.jobs = message.split()

        # responds
        TextHandler.sendBot.send(
            "You are interested in: " + ', '.join(messageItem.jobs), messageItem.senderNo)
        return messageItem

    def processDescription(self, message, phoneNumber):
        messageItem = Message()
        messageItem.senderNo = phoneNumber

        messageItem.description = message

        # responds
        TextHandler.sendBot.send(
            "Your profile: " + messageItem.description, messageItem.senderNo)

        return messageItem
