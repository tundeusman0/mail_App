"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _users_controller = _interopRequireDefault(require("../controller/users_controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router(); // POST signup


router.post('/signup', _users_controller.default.signUp); // POST login

router.post('/login', _users_controller.default.signIn);
var _default = router;
exports.default = _default;