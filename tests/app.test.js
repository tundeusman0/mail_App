const expect = require('expect');
const request = require('supertest');

const {
 users, messages, user, message,
} = require('./../utils/seed');

const app = require('./../app');


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

// test POST login
describe('POST /api/v1/auth/login', () => {
    // test POST login which should pass user login
    it('should login user', (done) => {
        const { email } = users[1];
const { password } = users[1];
        request(app)
            .post('/api/v1/auth/login')
            .send({ email, password })
            .expect(200)
            .expect((res) => {
                expect(res.body.data[0].token).toBe(users[1].token);
            })
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
    // test POST login which user should not login with different email and password
    it('should reject invalid login', (done) => {
        const { email } = users[1];
const { password } = users[0];
        request(app)
            .post('/api/v1/auth/login')
            .send({ email, password })
            .expect(400)
            .expect((res) => {
                expect(res.body.error).toEqual("No User exist");
            })
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});