"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Messages = exports.Message = exports.Users = exports.User = void 0;

var _refactors = require("./refactors");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function User(id, email, firstName, lastName, password, token) {
  _classCallCheck(this, User);

  this.id = id;
  this.email = email;
  this.firstName = firstName;
  this.lastName = lastName;
  this.password = password;
  this.token = token;
};

exports.User = User;

var Users = function Users() {
  var _this = this;

  _classCallCheck(this, Users);

  this.users = [];

  this.newUser = function (info) {
    var duplicateUser = _this.users.filter(function (user) {
      return user.email === info.email;
    });

    return new Promise(function (resolve, reject) {
      if (duplicateUser.length === 0) {
        resolve(_this.users.push(info));
      } else {
        reject("User already exist");
      }
    });
  };

  this.getUser = function (info) {
    var userGot = _this.users.filter(function (user) {
      return user.email === info.email && user.password === info.password;
    });

    return (0, _refactors.getPromise)(userGot, userGot.length >= 1, "No User exist");
  };
};

exports.Users = Users;

var Message = function Message(id, createdOn, subject, message, parentMessageId, status, senderId, receiverId) {
  _classCallCheck(this, Message);

  this.id = id;
  this.createdOn = createdOn;
  this.subject = subject;
  this.message = message;
  this.parentMessageId = parentMessageId;
  this.status = status;
  this.senderId = senderId, this.receiverId = receiverId;
};

exports.Message = Message;

var Messages = function Messages() {
  var _this2 = this;

  _classCallCheck(this, Messages);

  this.messages = [];

  this.createMessage = function (data) {
    var duplicateMessage = _this2.messages.filter(function (message) {
      return message.subject === data.subject;
    }); // return getPromise(this.messages.push(data), duplicateMessage.length === 0, "Message subject already exist");


    return new Promise(function (resolve, reject) {
      if (duplicateMessage.length === 0) {
        resolve(_this2.messages.push(data));
      } else {
        reject("Message subject already exist");
      }
    });
  };

  this.getMessages = function () {
    var messagesGot = _this2.messages.filter(function (message) {
      return message;
    });

    return (0, _refactors.getPromise)(messagesGot, messagesGot, "No Message");
  };

  this.getMessageById = function (id) {
    var messageId = _this2.messages.filter(function (message) {
      return message.id === id;
    });

    return (0, _refactors.getPromise)(messageId, messageId.length > 0, "No Message");
  };

  this.deleteMessageById = function (id) {
    var messageIndex = _this2.messages.findIndex(function (message) {
      return message.id === id;
    });

    return (0, _refactors.getDeletePromise)(messageIndex, _this2.messages);
  };
};

exports.Messages = Messages;