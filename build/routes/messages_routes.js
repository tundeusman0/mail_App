"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _message_controller = _interopRequireDefault(require("../controller/message_controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router(); // POST messages


router.post("/", _message_controller.default.messages); // GET messages

router.get("/", _message_controller.default.getMessage); // GET unread messages

router.get('/unread', _message_controller.default.unreadMessage); // GET sent messages

router.get('/sent', _message_controller.default.sentMessage); // GET message by Id

router.get('/:messageId', _message_controller.default.messagesById); // DELETE message by Id

router.delete('/:messageId', _message_controller.default.deleteMessagesById);
var _default = router;
exports.default = _default;