import expect from "expect";

import {
 users, messages, user, message, login,
} from "../utils/seed";

describe('Class User', () => {
    it("should add new user", () => {
        expect(users.users[3].email).toBe(user.email);
    });
    describe('Class Users', () => {
        it("should return user already exist", (done) => {
            users.newUser(user).then(() => {

            }).catch((err) => {
                expect(err).toBe("User already exist");
        }).finally(done);
    });
        it("should get a User", (done) => {
            users.getUser(login).then((result) => {
                expect(result.token).toBe(users.users[3].token);
            }).catch(() => {

            }).finally(done);
        });

        it("should not get a User", (done) => {
            users.getUser("fake@fgamil.com").then(() => {

            }).catch((err) => {
                expect(err).toBe("No User exist");
            }).finally(done);
        });
    });
});

describe('Class Message', () => {
    it("should add new message", () => {
        expect(messages.messages[2].subject).toBe(message.subject);
    });
    describe('Class Messages', () => {
        it("should return message subject already exist", (done) => {
            messages.createMessage(message).then(() => {

            }).catch((err) => {
                expect(err).toBe("Message subject already exist");
            }).finally(done);
        });
        it("should get all Messages", (done) => {
            messages.getMessages().then((result) => {
                expect(result.length).toBe(3);
            }).catch(() => {

            }).finally(done);
        });
        it("should get a message by ID", (done) => {
            messages.getMessageById(messages.messages[2].id).then((result) => {
                expect(result.subject).toBe(message.subject);
            }).catch(() => {

            }).finally(done);
        });
        it("should not return message with wrong Id", (done) => {
            messages.getMessageById(1234).then(() => {

            }).catch((err) => {
                expect(err).toBe("No Message");
            }).finally(done);
        });
        it("should not delete message with wrong Id", (done) => {
            messages.deleteMessageById(1234).then(() => {

            }).catch((err) => {
                expect(err).toBe("No Message to be deleted");
            }).finally(done);
        });
        it("should delete message with valid Id", (done) => {
            messages.deleteMessageById(messages.messages[2].id).then((result) => {
                expect(result.subject).toBe(message.subject);
                expect(messages.messages.length).toBe(2);
            }).catch(() => {
            }).finally(done);
        });
    });
});