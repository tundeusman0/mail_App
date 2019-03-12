"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _api_routes = _interopRequireDefault(require("./routes/api_routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// init App
var app = (0, _express.default)(); // static display of UI pages

app.use(_express.default.static("".concat(__dirname, "/UI"))); // heroku Port

var port = process.env.PORT || 3000; // body Parser middleware

app.use(_bodyParser.default.json());
app.use('/', _api_routes.default);
app.listen(port, function () {
  console.log("Strated up at port ".concat(port));
});
module.exports = app;