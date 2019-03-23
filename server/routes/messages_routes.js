import express from 'express';
import messages_controller from "../controller/message_controller";

const router = express.Router();


// POST messages
router.post("/", messages_controller.messages);

// GET messages
router.get("/", messages_controller.getMessage);

// GET unread messages
router.get('/unread', messages_controller.unreadMessage);

// GET sent messages
router.get('/sent', messages_controller.sentMessage);

// GET message by Id
router.get('/:messageId', messages_controller.messagesById);

// DELETE message by Id
router.delete('/:messageId', messages_controller.deleteMessagesById);

export default router;