import { users, messages } from './seed';
import getPromise from './refactors';

// export getUser function to get users in the seed
export const getUser = (input) => {
    const userId = users.filter(user => user.email === input.email
        && user.password === input.password);
    return getPromise(userId, userId.length >= 1, "No User exist");
};
//  export addUser function to add users
export const addUser = (info) => {
    const duplicateUser = users.filter(user => user.email === info.email);
    return getPromise((users.push(info), info), duplicateUser.length === 0, "User already exist");
};
//  export createMessage function to create message
export const createMessage = (data) => {
    const duplicateMessage = messages.filter(message => message.subject === data.subject);
    return new Promise((resolve, reject) => {
        if (duplicateMessage.length === 0) {
            resolve((messages.push(data), data));
        } else {
            reject("Message subject already exist");
        }
    });
};

// exports getMessages function to get all messages
export const getMessages = () => {
    const gottenMessages = messages.filter(message => message);
    return getPromise(gottenMessages, gottenMessages, "No Message");
};

// exports getMessageById function to get a message by Id
export const getMessageById = (id) => {
    const messageId = messages.filter(message => message.id === id);
    return getPromise(messageId, messageId.length > 0, "No Message");
};

// exports deleteMessageById function to delete a message by Id
export const deleteMessageById = (id) => {
    const messageIndex = messages.findIndex(message => message.id === id);
    return new Promise((resolve, reject) => {
        if (messageIndex >= 0) {
            const removedMessage = messages.splice(messageIndex, 1);
            resolve(removedMessage);
        } else {
            reject("No Message to be deleted");
        }
    });
};
