"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteMessageById = exports.getMessageById = exports.getMessages = exports.createMessage = exports.addUser = exports.getUser = void 0;

var _seed = require("./seed");

var _refactors = _interopRequireDefault(require("./refactors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export getUser function to get users in the seed
var getUser = function getUser(user) {
  var userId = _seed.users.filter(function (userz) {
    return userz.email === user.email && userz.password === user.password;
  });

  return (0, _refactors.default)(userId, userId.length >= 1, "No User exist");
}; //  export addUser function to add users


exports.getUser = getUser;

var addUser = function addUser(user) {
  var duplicateUser = _seed.users.filter(function (userz) {
    return userz.email === user.email;
  });

  return (0, _refactors.default)((_seed.users.push(user), user), duplicateUser.length === 0, "User already exist");
}; //  export createMessage function to create message


exports.addUser = addUser;

var createMessage = function createMessage(message) {
  var duplicateMessage = _seed.messages.filter(function (messagez) {
    return messagez.id === message.id;
  });

  return new Promise(function (resolve, reject) {
    if (duplicateMessage.length === 0) {
      resolve((_seed.messages.push(message), message));
    } else {
      reject("Message Id already exist");
    }
  });
}; // exports getMessages function to get all messages


exports.createMessage = createMessage;

var getMessages = function getMessages() {
  var messg = _seed.messages.filter(function (mssg) {
    return mssg;
  });

  return (0, _refactors.default)(messg, messg, "No Message");
}; // exports getMessageById function to get a message by Id


exports.getMessages = getMessages;

var getMessageById = function getMessageById(id) {
  var mssgId = _seed.messages.filter(function (mssg) {
    return mssg.id === id;
  });

  return (0, _refactors.default)(mssgId, mssgId.length > 0, "No Message");
}; // exports deleteMessageById function to delete a message by Id


exports.getMessageById = getMessageById;

var deleteMessageById = function deleteMessageById(id) {
  var mssgIndex = _seed.messages.findIndex(function (mssg) {
    return mssg.id === id;
  });

  return new Promise(function (resolve, reject) {
    if (mssgIndex >= 0) {
      var removedMesage = _seed.messages.splice(mssgIndex, 1);

      resolve(removedMesage);
    } else {
      reject("No Mssg to be deleted");
    }
  });
};

exports.deleteMessageById = deleteMessageById;