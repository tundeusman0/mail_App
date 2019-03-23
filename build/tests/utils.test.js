"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _seed = require("../utils/seed");

var _utils = require("../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// to test utils
describe('utils', function () {
  // test getUser which should return a user
  it('should a get User', function (done) {
    var login = {
      email: 'tundeusman1@gmail.com',
      password: "Userpassword1"
    };
    (0, _utils.getUser)(login).then(function (result) {
      (0, _expect.default)(result[0]).toEqual([[_seed.users[0]]]);
    }).catch(function () {}).finally(done);
  }); // test getUser which should not return a user

  it('should not a get User', function (done) {
    var login = {
      email: 'tundeusman1@gmail.com',
      password: "Userpassword11"
    };
    (0, _utils.getUser)(login).then(function () {}).catch(function (err) {
      (0, _expect.default)(err).toBe("No User exist");
    }).finally(done);
  }); // test addUser which should add a new user

  it('should add a new User', function (done) {
    (0, _utils.addUser)(_seed.user).then(function (result) {
      (0, _expect.default)(result).toEqual(_seed.user);
    }).catch(function () {}).finally(done);
  }); // test addUser which should not add a new user

  it('should not add a new User', function (done) {
    (0, _utils.addUser)([_seed.users[0]]).then(function () {}).catch(function (err) {
      (0, _expect.default)(err).toBe("User already exist");
    }).finally(done);
  }); // test createMessage which should create a new message

  it('should create a Message', function (done) {
    (0, _utils.createMessage)(_seed.message).then(function (result) {
      (0, _expect.default)(result).toEqual(_seed.message);
    }).catch(function (err) {
      (0, _expect.default)(err).toBe("Message subject already exist");
    }).finally(done);
  }); // test createMessage which should not create a new message

  it('should not create a message', function (done) {
    (0, _utils.createMessage)(_seed.message).then(function () {}).catch(function (err) {
      (0, _expect.default)(err).toBe("Message subject already exist");
    }).finally(done);
  }); // test getMessages which should get all messages

  it('should get Messages', function (done) {
    (0, _utils.getMessages)().then(function (result) {
      (0, _expect.default)(result).toEqual(_seed.messages);
    }).catch(function (err) {
      (0, _expect.default)(err).toBe("No Message");
    }).finally(done);
  }); // test getMessages which should not get any messages

  it('should not get messages', function (done) {
    (0, _utils.getMessages)().then(function (result) {
      (0, _expect.default)(result).not.toBe(_seed.message);
    }).catch(function (err) {
      (0, _expect.default)(err).toBe("No Message");
    }).finally(done);
  }); // test getMessagesById which should get a message by Id

  it('should get Message by Id', function (done) {
    (0, _utils.getMessageById)(102).then(function (result) {
      (0, _expect.default)(result).toEqual([_seed.messages[0]]);
    }).catch(function (err) {
      (0, _expect.default)(err).toBe("No Message");
    }).finally(done);
  }); // test getMessagesById which should not get a message with wrong Id

  it('should not get Message by Id', function (done) {
    (0, _utils.getMessageById)(11).then(function (result) {
      (0, _expect.default)(result).toEqual([]);
    }).catch(function (err) {
      (0, _expect.default)(err).toBe("No Message");
    }).finally(done);
  }); // test deleteMessageById which should delete a message by Id

  it('should delete Message by Id', function (done) {
    (0, _utils.deleteMessageById)(302).then(function (result) {
      (0, _expect.default)(_typeof(result)).toBe("object");
    }).catch(function (err) {
      (0, _expect.default)(err).toBe("No Message to be deleted");
    }).finally(done);
  }); // test deleteMessageById which should not delete a message with a wrong Id

  it('should not delete Message by Id', function (done) {
    (0, _utils.deleteMessageById)(11).then(function () {}).catch(function (err) {
      (0, _expect.default)(err).toBe("No Message to be deleted");
    }).finally(done);
  });
});