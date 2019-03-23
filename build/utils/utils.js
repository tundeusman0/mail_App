"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteMessageById = exports.getMessageById = exports.getMessages = exports.createMessage = exports.addUser = exports.getUser = void 0;

var _seed = require("./seed");

var _refactors = _interopRequireDefault(require("./refactors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export getUser function to get users in the seed
var getUser = function getUser(input) {
  var userId = _seed.users.filter(function (user) {
    return user.email === input.email && user.password === input.password;
  });

  return (0, _refactors.default)(userId, userId.length >= 1, "No User exist");
}; //  export addUser function to add users


exports.getUser = getUser;

var addUser = function addUser(info) {
  var duplicateUser = _seed.users.filter(function (user) {
    return user.email === info.email;
  });

  return (0, _refactors.default)((_seed.users.push(info), info), duplicateUser.length === 0, "User already exist");
}; //  export createMessage function to create message


exports.addUser = addUser;

var createMessage = function createMessage(data) {
  var duplicateMessage = _seed.messages.filter(function (message) {
    return message.subject === data.subject;
  });

  return new Promise(function (resolve, reject) {
    if (duplicateMessage.length === 0) {
      resolve((_seed.messages.push(data), data));
    } else {
      reject("Message subject already exist");
    }
  });
}; // exports getMessages function to get all messages


exports.createMessage = createMessage;

var getMessages = function getMessages() {
  var gottenMessages = _seed.messages.filter(function (message) {
    return message;
  });

  return (0, _refactors.default)(gottenMessages, gottenMessages, "No Message");
}; // exports getMessageById function to get a message by Id


exports.getMessages = getMessages;

var getMessageById = function getMessageById(id) {
  var messageId = _seed.messages.filter(function (message) {
    return message.id === id;
  });

  return (0, _refactors.default)(messageId, messageId.length > 0, "No Message");
}; // exports deleteMessageById function to delete a message by Id


exports.getMessageById = getMessageById;

var deleteMessageById = function deleteMessageById(id) {
  var messageIndex = _seed.messages.findIndex(function (message) {
    return message.id === id;
  });

  return new Promise(function (resolve, reject) {
    if (messageIndex >= 0) {
      var removedMessage = _seed.messages.splice(messageIndex, 1);

      resolve(removedMessage);
    } else {
      reject("No Message to be deleted");
    }
  });
};

exports.deleteMessageById = deleteMessageById;