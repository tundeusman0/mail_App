"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fakeLogin = exports.message = exports.login = exports.user = exports.messages = exports.users = void 0;

var _utils = require("./utils");

var _v = _interopRequireDefault(require("uuid/v4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dummy data for users
var seedUser1 = new _utils.User(101, 'tundeusman1@gmail.com', 'Tunde', 'Usman', 'Userpassword1', "gvweyuywyg");
var seedUser2 = new _utils.User(102, 'tundeusman2@gmail.com', 'Monsurah', 'Ishaq', 'Userpassword2', "uhewfhoir");
var seedUser3 = new _utils.User(333, 'example@gmail.com', "tunde", "usman", "password");
var users = new _utils.Users();
exports.users = users;
users.newUser(seedUser1).then(function (okay) {
  return okay;
}).catch(function (err) {
  return console.log(err);
});
users.newUser(seedUser2).then(function (okay) {
  return okay;
}).catch(function (err) {
  return console.log(err);
});
users.newUser(seedUser3).then(function (okay) {
  return okay;
}).catch(function (err) {
  return console.log(err);
});
var seedMessage1 = new _utils.Message((0, _v.default)(), "2/03/2019", 'I love Andela', 'Tunde usman love andela so much', 112, "draft", (0, _v.default)(), null);
var seedMessage2 = new _utils.Message((0, _v.default)(), "2/03/2019", 'My love for Andela', 'Andela is the best place where i will love to work', 224, "unread", 101, 201);
var seedMessage3 = new _utils.Message((0, _v.default)(), "2/04/2019", 'I love my life', 'Tunde usman loves his life', 105, "sent");
var messages = new _utils.Messages();
exports.messages = messages;
messages.createMessage(seedMessage1).then(function (okay) {
  return okay;
}).catch(function (err) {
  return err;
});
messages.createMessage(seedMessage2).then(function (okay) {
  return okay;
}).catch(function (err) {
  return err;
});
messages.createMessage(seedMessage3).then(function (okay) {
  return okay;
}).catch(function (err) {
  return err;
});
var user = new _utils.User(101, "testing@gmail.com", "Tunde", "usman", "password", "token");
exports.user = user;
var login = {
  email: "testing@gmail.com",
  password: "password"
};
exports.login = login;
var message = new _utils.Message(566, "6-7-28", 'Fake subject', 'Fake Message');
exports.message = message;
var fakeLogin = {
  email: "fake@gamil.com",
  password: "fakePassword"
};
exports.fakeLogin = fakeLogin;