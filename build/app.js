"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _user_routes = _interopRequireDefault(require("./routes/user_routes"));

var _messages_routes = _interopRequireDefault(require("./routes/messages_routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// init App
var app = (0, _express.default)(); // heroku Port

var port = process.env.PORT || 3000; // body Parser middleware

app.use(_bodyParser.default.json());
app.use('/api/v1/auth/', _user_routes.default);
app.use('/api/v1/messages', _messages_routes.default);
app.listen(port, function () {
  console.log("Strated up at port ".concat(port));
});
var _default = app;
exports.default = _default;