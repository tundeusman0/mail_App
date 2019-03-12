"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _supertest = _interopRequireDefault(require("supertest"));

var _seed = require("../utils/seed");

var _app = _interopRequireDefault(require("../app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// test API
// test POST signup
describe('POST /api/v1/auth/signup', function () {
  // test POST signup which should pass user create
  it('should create a user', function (done) {
    (0, _supertest.default)(_app.default).post('/api/v1/auth/signup').send(_seed.user).expect(200).expect(function (res) {
      (0, _expect.default)(res.body.data[0].token).toEqual(_seed.user.token);
    }).end(function (err) {
      if (err) return done(err);
      done();
    });
  }); // test POST signup which user should not create if the email is in use

  it('should not create a user if the email is in use', function (done) {
    var email = _seed.users[0].email;
    var password = _seed.users[0].password;
    (0, _supertest.default)(_app.default).post('/api/v1/auth/signup').send({
      email: email,
      password: password
    }).expect(400).end(function (err) {
      if (err) return done(err);
      done();
    });
  });
}); // test POST messages

describe('POST /api/v1/messages', function () {
  // test POST message which should pass create a message
  it('should create a new message', function (done) {
    (0, _supertest.default)(_app.default).post('/api/v1/messages').send(_seed.message).expect(200).expect(function (res) {
      (0, _expect.default)(res.body.data[0]).toEqual(_seed.message);
    }).end(function (err) {
      if (err) return done(err);
      done();
    });
  }); // test POST message which should pass message not create with already exist id

  it('should not create when id already exists', function (done) {
    var id = _seed.messages[0].id;
    (0, _supertest.default)(_app.default).post('/api/v1/messages').send({
      id: id
    }).expect(400).end(function (err) {
      if (err) return done(err);
      done();
    });
  });
}); // test GET messages

describe("GET /messages", function () {
  // test GET messages which should pass get all messages
  it('should get all messages', function (done) {
    (0, _supertest.default)(_app.default).get("/api/v1/messages").expect(200).expect(function (res) {
      (0, _expect.default)(res.body.data.length).toBe(4);
    }).end(function (err) {
      if (err) return done(err);
      done();
    });
  });
}); // test GET unread messages

describe('GET /api/v1/messages/unread', function () {
  // test GET messages which should pass to get unread messages
  it('should return unread messages', function (done) {
    (0, _supertest.default)(_app.default).get('/api/v1/messages/unread').expect(200).expect(function (res) {
      (0, _expect.default)(res.body.data[0].status).toBe("unread");
    }).end(function (err) {
      if (err) return done(err);
      done();
    });
  });
}); // test GET sent messages

describe('GET /api/v1/messages/sent', function () {
  // test GET messages which should pass to get sent messages
  it('should return sent messages', function (done) {
    (0, _supertest.default)(_app.default).get('/api/v1/messages/sent').expect(200).expect(function (res) {
      (0, _expect.default)(res.body.data[0].status).toBe("sent");
    }).end(function (err) {
      if (err) return done(err);
      done();
    });
  });
}); // test GET message by Id

describe('GET /api/v1/messages/:messageId', function () {
  // test GET message which should pass to get message by id
  it('should return message with the id', function (done) {
    (0, _supertest.default)(_app.default).get("/api/v1/messages/111").expect(200).expect(function (res) {
      (0, _expect.default)(res.body.data).toEqual([_seed.message]);
    }).end(function (err) {
      if (err) return done(err);
      done();
    });
  }); // test GET message which should pass to get 400 with message invalid id

  it('should return a 400 if message not found', function (done) {
    (0, _supertest.default)(_app.default).get("/api/v1/messages/112").expect(400).end(function (err) {
      if (err) return done(err);
      done();
    });
  });
}); // test DELETE message by Id

describe('DELETE /api/v1/messages/:messageId', function () {
  // test DELETE message which should pass to delete message by id
  it('should delete message with valid id', function (done) {
    (0, _supertest.default)(_app.default).delete("/api/v1/messages/111").expect(200).expect(function (res) {
      (0, _expect.default)(res.body.data[0].message).toBe(_seed.message.message);
    }).end(function (err) {
      if (err) return done(err);
      done();
    });
  }); // test DELETE message which should pass to not delete message with invalid id

  it('should not delete message with invalid id', function (done) {
    (0, _supertest.default)(_app.default).delete("/api/v1/messages/112").expect(400).end(function (err) {
      if (err) return done(err);
      done();
    });
  });
});