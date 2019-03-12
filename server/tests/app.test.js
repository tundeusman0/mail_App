import expect from "expect";
import request from "supertest";

import {
 users, messages, user, message,
} from "../utils/seed";

import app from "../app";


// test API

// test POST signup
describe('POST /api/v1/auth/signup', () => {
    // test POST signup which should pass user create
    it('should create a user', (done) => {
        request(app)
            .post('/api/v1/auth/signup')
            .send(user)
            .expect(200)
            .expect((res) => {
                expect(res.body.data[0].token).toEqual(user.token);
            })
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    // test POST signup which user should not create if the email is in use
    it('should not create a user if the email is in use', (done) => {
        const { email } = users[0];
const { password } = users[0];
        request(app)
            .post('/api/v1/auth/signup')
            .send({ email, password })
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

// test POST messages
describe('POST /api/v1/messages', () => {
    // test POST message which should pass create a message
    it('should create a new message', (done) => {
        request(app)
            .post('/api/v1/messages')
            .send(message)
            .expect(200)
            .expect((res) => {
                expect(res.body.data[0]).toEqual(message);
            })
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    // test POST message which should pass message not create with already exist id
    it('should not create when id already exists', (done) => {
        const { id } = messages[0];
        request(app)
            .post('/api/v1/messages')
            .send({ id })
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

// test GET messages
describe("GET /messages", () => {
    // test GET messages which should pass get all messages
    it('should get all messages', (done) => {
        request(app)
            .get("/api/v1/messages")
            .expect(200)
            .expect((res) => {
                expect(res.body.data.length).toBe(4);
            })
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

// test GET unread messages
describe('GET /api/v1/messages/unread', () => {
    // test GET messages which should pass to get unread messages
    it('should return unread messages', (done) => {
        request(app)
            .get('/api/v1/messages/unread')
            .expect(200)
            .expect((res) => {
                expect(res.body.data[0].status).toBe("unread");
            })
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

// test GET sent messages
describe('GET /api/v1/messages/sent', () => {
    // test GET messages which should pass to get sent messages
    it('should return sent messages', (done) => {
        request(app)
            .get('/api/v1/messages/sent')
            .expect(200)
            .expect((res) => {
                expect(res.body.data[0].status).toBe("sent");
            })
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

// test GET message by Id
describe('GET /api/v1/messages/:messageId', () => {
    // test GET message which should pass to get message by id
    it('should return message with the id', (done) => {
        request(app)
            .get("/api/v1/messages/111")
            .expect(200)
            .expect((res) => {
                expect(res.body.data).toEqual([message]);
            })
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    // test GET message which should pass to get 400 with message invalid id
    it('should return a 400 if message not found', (done) => {
        request(app)
            .get("/api/v1/messages/112")
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

// test DELETE message by Id
describe('DELETE /api/v1/messages/:messageId', () => {
    // test DELETE message which should pass to delete message by id
    it('should delete message with valid id', (done) => {
        request(app)
            .delete("/api/v1/messages/111")
            .expect(200)
            .expect((res) => {
                expect(res.body.data[0].message).toBe(message.message);
            })
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    // test DELETE message which should pass to not delete message with invalid id
    it('should not delete message with invalid id', (done) => {
        request(app)
            .delete("/api/v1/messages/112")
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});