import { getPromise, getDeletePromise } from './refactors';

export class User {
    constructor(id, email, firstName, lastName, password, token) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.token = token;
    }
}

export class Users {
    constructor() {
        this.users = [];
        this.newUser = (info) => {
            const duplicateUser = this.users.filter(user => user.email === info.email);
            return new Promise((resolve, reject) => {
                if (duplicateUser.length === 0) {
                    resolve(this.users.push(info));
                } else {
                    reject("User already exist");
                }
            });
        };
        this.getUser = (info) => {
            const userGot = this.users.filter(user => user.email === info.email
                && user.password === info.password);
            return getPromise(userGot, userGot.length >= 1, "No User exist");
        };
    }
}

export class Message {
    constructor(id, createdOn, subject, message, parentMessageId, status, senderId, receiverId) {
        this.id = id;
        this.createdOn = createdOn;
        this.subject = subject;
        this.message = message;
        this.parentMessageId = parentMessageId;
        this.status = status;
        this.senderId = senderId;
        this.receiverId = receiverId;
    }
}

export class Messages {
    constructor() {
        this.messages = [];
        this.createMessage = (data) => {
        const duplicateMessage = this.messages.filter(message => message.subject === data.subject);
            // return getPromise(this.messages.push(data),
            // duplicateMessage.length === 0, "Message subject already exist");
            return new Promise((resolve, reject) => {
                if (duplicateMessage.length === 0) {
                    resolve(this.messages.push(data));
                } else {
                    reject("Message subject already exist");
                }
            });
        };
        this.getMessages = () => {
            const messagesGot = this.messages.filter(message => message);
            return getPromise(messagesGot, messagesGot, "No Message");
        };
        this.getMessageById = (id) => {
            const messageId = this.messages.filter(message => message.id === id);
            return getPromise(messageId, messageId.length > 0, "No Message");
        };
        this.deleteMessageById = (id) => {
            const messageIndex = this.messages.findIndex(message => message.id === id);
            return getDeletePromise(messageIndex, this.messages);
        };
    }
}