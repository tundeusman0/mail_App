// const expect = require('expect');
import expect from "expect";
import {
    users, messages, user, message,
} from "./../utils/seed"
import {
    addUser, getUser, createMessage, getMessageById, getMessages, deleteMessageById,
} from "./../utils/utils"
// const {
//  users, messages, user, message,
// } = require('./../utils/seed');
// const utils = require('./../utils/utils');

// to test utils
describe('utils', () => {
    // test getUser which should return a user
    it('should a get User', (done) => {
        const login = {
            email: 'tundeusman1@gmail.com',
            password: "Userpassword1",
        };
        getUser(login).then((result) => {
            expect(result[0]).toEqual([[users[0]]]);
        }).catch(() => {

        }).finally(done);
    });

    // test getUser which should not return a user
    it('should not a get User', (done) => {
        const login = {
            email: 'tundeusman1@gmail.com',
            password: "Userpassword11",
        };
        getUser(login).then(() => {

        }).catch((err) => {
            expect(err).toBe("No User exist");
        }).finally(done);
    });

    // test addUser which should add a new user
    it('should add a new User', (done) => {
        addUser(user).then((result) => {
            expect(result).toEqual(user);
        }).catch(() => {

        }).finally(done);
    });

    // test addUser which should not add a new user
    it('should not add a new User', (done) => {
        addUser([users[0]]).then(() => {

        }).catch((err) => {
            expect(err).toBe("User already exist");
        }).finally(done);
    });

    // test createMessage which should create a new message
    it('should create a Message', (done) => {
        createMessage(message).then((result) => {
            expect(result).toEqual(message);
        }).catch((err) => {
            expect(err).toBe("Message Id already exist");
        }).finally(done);
    });

    // test createMessage which should not create a new message
    it('should not create a message', (done) => {
        createMessage(message).then(() => {

        }).catch((err) => {
            expect(err).toBe("Message Id already exist");
        }).finally(done);
    });

    // test getMessages which should get all messages
    it('should get Messages', (done) => {
        getMessages().then((result) => {
            expect(result).toEqual(messages);
        }).catch((err) => {
            expect(err).toBe("No Message");
        }).finally(done);
    });

    // test getMessages which should not get any messages
    it('should not get messages', (done) => {
        getMessages().then((result) => {
            expect(result).not.toBe(message);
        }).catch((err) => {
            expect(err).toBe("No Message");
        }).finally(done);
    });

    // test getMessagesById which should get a message by Id
    it('should get Message by Id', (done) => {
        getMessageById(102).then((result) => {
            expect(result).toEqual([messages[0]]);
        }).catch((err) => {
            expect(err).toBe("No Message");
        }).finally(done);
    });

    // test getMessagesById which should not get a message with wrong Id
    it('should not get Message by Id', (done) => {
        getMessageById(11).then((result) => {
            expect(result).toEqual([]);
        }).catch((err) => {
            expect(err).toBe("No Message");
        }).finally(done);
    });

    // test deleteMessageById which should delete a message by Id
    it('should delete Message by Id', (done) => {
        deleteMessageById(302).then((result) => {
            expect(typeof result).toBe("object");
        }).catch((err) => {
            expect(err).toBe("No Mssg to be deleted");
        }).finally(done);
    });

    // test deleteMessageById which should not delete a message with a wrong Id
    it('should not delete Message by Id', (done) => {
        deleteMessageById(11).then(() => {

        }).catch((err) => {
            expect(err).toBe("No Mssg to be deleted");
        }).finally(done);
    });
});
