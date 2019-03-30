"use strict";

var _v = _interopRequireDefault(require("uuid/v4"));

var _moment = _interopRequireDefault(require("moment"));

var _utils = require("./../utils/utils");

var _seed = require("./../utils/seed");

var _statusPicker = _interopRequireDefault(require("./../utils/statusPicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.messages = function (req, res) {
  var _req$body = req.body,
      subject = _req$body.subject,
      message = _req$body.message;

  var status = _statusPicker.default.pick();

  var createdOn = (0, _moment.default)().format('LLL');
  var id = (0, _v.default)();
  var parentMessageId = (0, _v.default)();
  var info = new _utils.Message(id, createdOn, subject, message, parentMessageId, status);

  _seed.messages.createMessage(info).then(function (message) {
    res.status(200).send({
      status: 200,
      data: [{
        info: info
      }]
    });
  }).catch(function (err) {
    res.status(400).send({
      status: 400,
      error: err
    });
  });
};

exports.getMessage = function (req, res) {
  _seed.messages.getMessages().then(function (message) {
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
  _seed.messages.getMessages().then(function (messages) {
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
  _seed.messages.getMessages().then(function (messages) {
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
  var id = req.params.messageId;

  _seed.messages.getMessageById(id).then(function (message) {
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
  var id = req.params.messageId;

  _seed.messages.deleteMessageById(id).then(function (deleted) {
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