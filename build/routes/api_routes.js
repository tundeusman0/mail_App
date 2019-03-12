"use strict";

var _express = _interopRequireDefault(require("express"));

var _utils = require("../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var router = _express.default.Router(); // POST signup


router.post('/api/v1/auth/signup', function (req, res) {
  var _req$body = req.body,
      id = _req$body.id,
      email = _req$body.email,
      password = _req$body.password,
      firstName = _req$body.firstName,
      lastName = _req$body.lastName,
      token = _req$body.token;
  var user = {
    id: id,
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
    token: token
  };
  (0, _utils.addUser)(user).then(function () {
    res.status(200).send({
      status: 200,
      data: [{
        token: token
      }]
    });
  }).catch(function (err) {
    res.status(400).send({
      status: 400,
      error: err
    });
  });
}); // POST login

router.post('/api/v1/auth/login', function (req, res) {
  var _req$body2 = req.body,
      email = _req$body2.email,
      password = _req$body2.password;
  var login = {
    email: email,
    password: password
  };
  (0, _utils.getUser)(login).then(function (user) {
    var token = user[0].token;
    res.status(200).send({
      status: 200,
      data: [{
        token: token
      }]
    });
  }).catch(function (err) {
    res.status(400).send({
      status: 400,
      error: err
    });
  });
}); // POST messages

router.post('/api/v1/messages', function (req, res) {
  var _req$body3 = req.body,
      subject = _req$body3.subject,
      message = _req$body3.message,
      id = _req$body3.id,
      createdOn = _req$body3.createdOn;
  var status = "read";
  var parentMessageId = 105;
  var messag = {
    id: id,
    createdOn: createdOn,
    subject: subject,
    message: message,
    parentMessageId: parentMessageId,
    status: status
  };
  (0, _utils.createMessage)(messag).then(function (mesage) {
    res.status(200).send({
      status: 200,
      data: [_objectSpread({}, mesage)]
    });
  }).catch(function (err) {
    res.status(400).send({
      status: 400,
      error: err
    });
  });
}); // GET messages

router.get('/api/v1/messages', function (req, res) {
  (0, _utils.getMessages)().then(function (mssg) {
    res.status(200).send({
      status: 200,
      data: mssg
    });
  }).catch(function (err) {
    res.status(400).send({
      status: 400,
      error: err
    });
  });
}); // GET unread messages

router.get('/api/v1/messages/unread', function (req, res) {
  (0, _utils.getMessages)().then(function (mssg) {
    var unread = mssg.filter(function (message) {
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
}); // GET sent messages

router.get('/api/v1/messages/sent', function (req, res) {
  (0, _utils.getMessages)().then(function (mssg) {
    var unsent = mssg.filter(function (message) {
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
}); // GET message by Id

router.get('/api/v1/messages/:messageId', function (req, res) {
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
}); // DELETE message by Id

router.delete('/api/v1/messages/:messageId', function (req, res) {
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
});
module.exports = router;