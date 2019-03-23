import uuidv1 from "uuid/v1";
import moment from "moment";
import {
    createMessage, getMessageById, getMessages, deleteMessageById,
} from "../utils/utils";

const { Picker } = require('random-picker');

const statusPicker = new Picker();
statusPicker.option('read');
statusPicker.option('draft');
statusPicker.option('sent');
statusPicker.option('unread');

exports.messages = (req, res) => {
    const {
        subject, message,
    } = req.body;
    const status = statusPicker.pick();
    const createdOn = moment().format('LLL');
    const id = uuidv1();
    const parentMessageId = uuidv1();
    const messages = {
        id, createdOn, subject, message, parentMessageId, status,
    };
    createMessage(messages).then((message) => {
        res.status(200).send({
            status: 200,
            data: [{
                ...message,
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
    getMessages().then((message) => {
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
    getMessages().then((messages) => {
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
    getMessages().then((messages) => {
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
    const id = Number(req.params.messageId);
    getMessageById(id).then((message) => {
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
    const id = Number(req.params.messageId);
    deleteMessageById(id).then((deleted) => {
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
