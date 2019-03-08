const expect = require('expect')
const {users, messages, user, message} = require('./../utils/seed')
const utils = require('./../utils/utils')

// to test utils
describe('utils', () => {
    // test getUser which should return a user
    it('should a get User', (done) => {
        const login = {
            email:'tundeusman1@gmail.com', 
            password:"Userpassword1"
        }
        utils.getUser(login).then((result) => {
            expect(result[0]).toEqual([[users[0]]]);
        }).catch(err => {
            return
        }).finally(done);
    });

    // test getUser which should not return a user
    it('should not a get User', (done) => {
        const login = {
            email: 'tundeusman1@gmail.com',
            password: "Userpassword11"
        }
        utils.getUser(login).then((result) => {
            return 
        }).catch(err=>{
            expect(err).toBe("No User exist")
        }).finally(done);
    });

    // test addUser which should add a new user
    it('should add a new User', (done) => {
        utils.addUser(user).then((result) => {
            expect(result).toEqual(user);
        }).catch(err => {
            return;
        }).finally(done);
    });

    // test addUser which should not add a new user
    it('should not add a new User', (done) => {
        utils.addUser([users[0]]).then((result) => {
            return;
        }).catch(err=>{
            expect(err).toBe("User already exist")
        }).finally(done);
    });

    // test createMessage which should create a new message
    it('should create a Message', (done) => {
        utils.createMessage(message).then((result) => {
            expect(result).toEqual(message);
        }).catch(err => {
            expect(err).toBe("Message Id already exist")
        }).finally(done);
    });

    // test createMessage which should not create a new message
    it('should not create a message', (done) => {
        utils.createMessage(message).then(message => {
            return;
        }).catch(err => {
            expect(err).toBe("Message Id already exist")
        }).finally(done);
    });

    // test getMessages which should get all messages
    it('should get Messages', (done) => {
        utils.getMessages().then((result) => {
            expect(result).toEqual(messages);
        }).catch(err => {
            expect(err).toBe("No Message")
        }).finally(done);
    });

    // test getMessages which should not get any messages
    it('should not get messages', (done) => {
        utils.getMessages().then(result => {
            expect(result).not.toBe(message);
        }).catch(err => {
            expect(err).toBe("No Message")
        }).finally(done);
    });

    // test getMessagesById which should get a message by Id
    it('should get Message by Id', (done) => {
        utils.getMessageById(102).then((result) => {
            expect(result).toEqual([messages[0]]);
        }).catch(err => {
            expect(err).toBe("No Message")
        }).finally(done);
    });

    // test getMessagesById which should not get a message with wrong Id
    it('should not get Message by Id', (done) => {
        utils.getMessageById(11).then((result) => {
            expect(result).toEqual([]);
        }).catch(err => {
            expect(err).toBe("No Message")
        }).finally(done)
    });

    // test deleteMessageById which should delete a message by Id
    it('should delete Message by Id', (done) => {
        utils.deleteMessageById(302).then((result) => {
            expect(typeof result).toBe("object")
        }).catch(err => {
            expect(err).toBe("No Mssg to be deleted")
        }).finally(done);
    });

    // test deleteMessageById which should not delete a message with a wrong Id
    it('should not delete Message by Id', (done) => {
        utils.deleteMessageById(11).then((result) => {
            return;
        }).catch(err => {
            expect(err).toBe("No Mssg to be deleted")
        }).finally(done)
    });


})
