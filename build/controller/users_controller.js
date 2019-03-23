"use strict";

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _v = _interopRequireDefault(require("uuid/v1"));

var EmailValidator = _interopRequireWildcard(require("email-validator"));

var _utils = require("../utils/utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.signUp = function (req, res) {
  var _req$body = req.body,
      email = _req$body.email,
      password = _req$body.password,
      firstName = _req$body.firstName,
      lastName = _req$body.lastName;
  var id = (0, _v.default)();

  var token = _jsonwebtoken.default.sign({
    id: id
  }, "okay");

  var user = {
    id: id,
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
    token: token
  };
  var emailIsValid = EmailValidator.validate(email);

  if (emailIsValid) {
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
  } else {
    res.status(400).send({
      status: 400,
      error: "email is invalid"
    });
  }
};

exports.signIn = function (req, res) {
  var _req$body2 = req.body,
      email = _req$body2.email,
      password = _req$body2.password;
  var login = {
    email: email,
    password: password
  };
  var emailIsValid = EmailValidator.validate(email);

  if (emailIsValid) {
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
  } else {
    res.status(400).send({
      status: 400,
      error: "email is invalid"
    });
  }
};