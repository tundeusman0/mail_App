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