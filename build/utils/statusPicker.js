"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _randomPicker = require("random-picker");

var statusPicker = new _randomPicker.Picker();
statusPicker.option('read');
statusPicker.option('draft');
statusPicker.option('sent');
statusPicker.option('unread');
var _default = statusPicker;
exports.default = _default;