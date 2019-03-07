const { users, messages } = require('./seed');
const { getPromise } = require('./refactors');

// export getUser function to get users in the seed
module.exports.getUser = (user) => {
    const userId = users.filter(userz => userz.email === user.email
        && userz.password === user.password);
    return getPromise(userId, userId.length >= 1, "No User exist");
};
//  export addUser function to add users
module.exports.addUser = (user) => {
    const duplicateUser = users.filter(userz => userz.email === user.email);
    return getPromise((users.push(user), user), duplicateUser.length === 0, "User already exist");
};
//  export createMessage function to create message
module.exports.createMessage = (message) => {
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
module.exports.getMessages = () => {
    const messg = messages.filter(mssg => mssg);
    return getPromise(messg, messg, "No Message");
};

// exports getMessageById function to get a message by Id
module.exports.getMessageById = (id) => {
    const mssgId = messages.filter(mssg => mssg.id === id);
    return getPromise(mssgId, mssgId.length > 0, "No Message");
};

// exports deleteMessageById function to delete a message by Id
module.exports.deleteMessageById = (id) => {
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
