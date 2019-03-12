import { users, messages } from './seed';
import getPromise from './refactors';

// export getUser function to get users in the seed
export const getUser = (user) => {
    const userId = users.filter(userz => userz.email === user.email
        && userz.password === user.password);
    return getPromise(userId, userId.length >= 1, "No User exist");
};
//  export addUser function to add users
export const addUser = (user) => {
    const duplicateUser = users.filter(userz => userz.email === user.email);
    return getPromise((users.push(user), user), duplicateUser.length === 0, "User already exist");
};
//  export createMessage function to create message
export const createMessage = (message) => {
    const duplicateMessage = messages.filter(messagez => messagez.id === message.id);
    return new Promise((resolve, reject) => {
        if (duplicateMessage.length === 0) {
            resolve((messages.push(message), message));
        } else {
            reject("Message Id already exist");
        }
    });
};

// exports getMessages function to get all messages
export const getMessages = () => {
    const messg = messages.filter(mssg => mssg);
    return getPromise(messg, messg, "No Message");
};

// exports getMessageById function to get a message by Id
export const getMessageById = (id) => {
    const mssgId = messages.filter(mssg => mssg.id === id);
    return getPromise(mssgId, mssgId.length > 0, "No Message");
};

// exports deleteMessageById function to delete a message by Id
export const deleteMessageById = (id) => {
    const mssgIndex = messages.findIndex(mssg => mssg.id === id);
    return new Promise((resolve, reject) => {
        if (mssgIndex >= 0) {
            const removedMesage = messages.splice(mssgIndex, 1);
            resolve(removedMesage);
        } else {
            reject("No Mssg to be deleted");
        }
    });
};
