"use strict";

var _v = _interopRequireDefault(require("uuid/v1"));

var _moment = _interopRequireDefault(require("moment"));

var _utils = require("../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('random-picker'),
    Picker = _require.Picker;

var statusPicker = new Picker();
statusPicker.option('read');
statusPicker.option('draft');
statusPicker.option('sent');
statusPicker.option('unread');

exports.messages = function (req, res) {
  var _req$body = req.body,
      subject = _req$body.subject,
      message = _req$body.message;
  var status = statusPicker.pick();
  var createdOn = (0, _moment.default)().format('LLL');
  var id = (0, _v.default)();
  var parentMessageId = (0, _v.default)();
  var messages = {
    id: id,
    createdOn: createdOn,
    subject: subject,
    message: message,
    parentMessageId: parentMessageId,
    status: status
  };
  (0, _utils.createMessage)(messages).then(function (message) {
    res.status(200).send({
      status: 200,
      data: [_objectSpread({}, message)]
    });
  }).catch(function (err) {
    res.status(400).send({
      status: 400,
      error: err
    });
  });
};

exports.getMessage = function (req, res) {
  (0, _utils.getMessages)().then(function (message) {
    res.status(200).send({
      status: 200,
      data: message
    });
  }).catch(function (err) {
    res.status(400).send({
      status: 400,
      error: err
    });
  });
};

exports.unreadMessage = function (req, res) {
  (0, _utils.getMessages)().then(function (messages) {
    var unread = messages.filter(function (message) {
      return message.status === "unread";
    });

    if (unread.length > 0) {
      res.status(200).send({
        status: 200,
        data: unread
      });
    } else {
      res.status(400).send({
        status: 400,
        error: "no-message"
      });
    }
  }).catch(function (err) {
    res.status(400).send({
      status: 400,
      error: err
    });
  });
};

exports.sentMessage = function (req, res) {
  (0, _utils.getMessages)().then(function (messages) {
    var unsent = messages.filter(function (message) {
      return message.status === "sent";
    });

    if (unsent.length > 0) {
      res.status(200).send({
        status: 200,
        data: unsent
      });
    } else {
      res.status(400).send({
        status: 400,
        error: "no-message"
      });
    }
  }).catch(function (err) {
    res.status(400).send({
      status: 400,
      error: err
    });
  });
};

exports.messagesById = function (req, res) {
  var id = Number(req.params.messageId);
  (0, _utils.getMessageById)(id).then(function (message) {
    res.status(200).send({
      status: 200,
      data: message
    });
  }).catch(function (err) {
    res.status(400).send({
      status: 400,
      error: err
    });
  });
};

exports.deleteMessagesById = function (req, res) {
  var id = Number(req.params.messageId);
  (0, _utils.deleteMessageById)(id).then(function (deleted) {
    var message = deleted[0].message;
    res.status(200).send({
      status: 200,
      data: [{
        message: message
      }]
    });
  }).catch(function (err) {
    res.status(400).send({
      status: 400,
      error: err
    });
  });
};