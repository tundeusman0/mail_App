"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _seed = require("./../utils/seed");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Class User', function () {
  it("should add new user", function () {
    (0, _expect.default)(_seed.users.users[3].email).toBe(_seed.user.email);
  });
  describe('Class Users', function () {
    it("should return user already exist", function (done) {
      _seed.users.newUser(_seed.user).then(function () {}).catch(function (err) {
        (0, _expect.default)(err).toBe("User already exist");
      }).finally(done);
    });
    it("should get a User", function (done) {
      _seed.users.getUser(_seed.login).then(function (result) {
        (0, _expect.default)(result.token).toBe(_seed.users.users[3].token);
      }).catch(function () {}).finally(done);
    });
    it("should not get a User", function (done) {
      _seed.users.getUser("fake@fgamil.com").then(function (result) {}).catch(function (err) {
        (0, _expect.default)(err).toBe("No User exist");
      }).finally(done);
    });
  });
});
describe('Class Message', function () {
  it("should add new message", function () {
    (0, _expect.default)(_seed.messages.messages[2].subject).toBe(_seed.message.subject);
  });
  describe('Class Messages', function () {
    it("should return message subject already exist", function (done) {
      _seed.messages.createMessage(_seed.message).then(function () {}).catch(function (err) {
        (0, _expect.default)(err).toBe("Message subject already exist");
      }).finally(done);
    });
    it("should get all Messages", function (done) {
      _seed.messages.getMessages().then(function (result) {
        (0, _expect.default)(result.length).toBe(3);
      }).catch(function () {}).finally(done);
    });
    it("should get a message by ID", function (done) {
      _seed.messages.getMessageById(_seed.messages.messages[2].id).then(function (result) {
        (0, _expect.default)(result.subject).toBe(_seed.message.subject);
      }).catch(function () {}).finally(done);
    });
    it("should not return message with wrong Id", function (done) {
      _seed.messages.getMessageById(1234).then(function () {}).catch(function (err) {
        (0, _expect.default)(err).toBe("No Message");
      }).finally(done);
    });
    it("should not delete message with wrong Id", function (done) {
      _seed.messages.deleteMessageById(1234).then(function () {}).catch(function (err) {
        (0, _expect.default)(err).toBe("No Message to be deleted");
      }).finally(done);
    });
    it("should delete message with valid Id", function (done) {
      _seed.messages.deleteMessageById(_seed.messages.messages[2].id).then(function (result) {
        (0, _expect.default)(result.subject).toBe(_seed.message.subject);
        (0, _expect.default)(_seed.messages.messages.length).toBe(2);
      }).catch(function (err) {}).finally(done);
    });
  });
});