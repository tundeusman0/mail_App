import uuidv4 from "uuid/v4";
import moment from "moment";
import { Message } from "../utils/utils";
import { messages } from "../utils/seed";

import statusPicker from "../utils/statusPicker";

exports.messages = (req, res) => {
    const {
        subject, message,
    } = req.body;
    const status = statusPicker.pick();
    const createdOn = moment().format('LLL');
    const id = uuidv4();
    const parentMessageId = uuidv4();
    const info = new Message(id, createdOn, subject, message, parentMessageId, status);
    messages.createMessage(info).then(() => {
        res.status(200).send({
            status: 200,
            data: [{
                info,
            }],
        });
    }).catch((err) => {
        res.status(400).send({
            status: 400,
            error: err,
        });
    });
};

exports.getMessage = (req, res) => {
    messages.getMessages().then((message) => {
        res.status(200).send({
            status: 200,
            data: message,
        });
    }).catch((err) => {
        res.status(400).send({
            status: 400,
            error: err,
        });
    });
};

exports.unreadMessage = (req, res) => {
    messages.getMessages().then((messages) => {
        const unread = messages.filter(message => message.status === "unread");
        if (unread.length > 0) {
            res.status(200).send({
                status: 200,
                data: unread,
            });
        } else {
            res.status(400).send({
                status: 400,
                error: "no-message",
            });
        }
    }).catch((err) => {
        res.status(400).send({
            status: 400,
            error: err,
        });
    });
};

exports.sentMessage = (req, res) => {
    messages.getMessages().then((messages) => {
        const unsent = messages.filter(message => message.status === "sent");
        if (unsent.length > 0) {
            res.status(200).send({
                status: 200,
                data: unsent,
            });
        } else {
            res.status(400).send({
                status: 400,
                error: "no-message",
            });
        }
    }).catch((err) => {
        res.status(400).send({
            status: 400,
            error: err,
        });
    });
};

exports.messagesById = (req, res) => {
    const id = req.params.messageId;
    messages.getMessageById(id).then((message) => {
        res.status(200).send({
            status: 200,
            data: message,
        });
    }).catch((err) => {
        res.status(400).send({
            status: 400,
            error: err,
        });
    });
};

exports.deleteMessagesById = (req, res) => {
    const id = req.params.messageId;
    messages.deleteMessageById(id).then((deleted) => {
        const { message } = deleted[0];
        res.status(200).send({
            status: 200,
            data: [{
                message,
            }],
        });
    }).catch((err) => {
        res.status(400).send({
            status: 400,
            error: err,
        });
    });
};
