"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _utils = require("../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
});
var _default = router;
exports.default = _default;