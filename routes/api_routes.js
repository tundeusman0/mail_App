const express = require('express');

const router = express.Router();
const utils = require('./../utils/utils');

// POST signup
router.post('/api/v1/auth/signup', (req, res) => {
    const {
 id, email, password, firstName, lastName, token,
} = req.body;
    const user = {
        id, email, password, firstName, lastName, token,
    };
    utils.addUser(user).then(() => {
        res.status(200).send({
            status: 200,
            data: [{
                token,
            }],
        });
    }).catch((err) => {
        res.status(400).send({
            status: 400,
            error: err,
        });
    });
});

// POST login
router.post('/api/v1/auth/login', (req, res) => {
    const { email, password } = req.body;
    const login = {
        email, password,
    };

    utils.getUser(login).then((user) => {
        const { token } = user[0];
        res.status(200).send({
            status: 200,
            data: [{
                token,
            }],
        });
    }).catch((err) => {
        res.status(400).send({
            status: 400,
            error: err,
        });
    });
});

// POST messages
router.post('/api/v1/messages', (req, res) => {
    const {
 subject, message, id, createdOn,
} = req.body;
    const status = "read";
    const parentMessageId = 105;
    const messag = {
        id, createdOn, subject, message, parentMessageId, status,
    };
    utils.createMessage(messag).then((mesage) => {
        res.status(200).send({
            status: 200,
            data: [{
                ...mesage,
            }],
        });
    }).catch((err) => {
        res.status(400).send({
            status: 400,
            error: err,
        });
    });
});

// GET messages
router.get('/api/v1/messages', (req, res) => {
    utils.getMessages().then((mssg) => {
        res.status(200).send({
            status: 200,
            data: mssg,
        });
    }).catch((err) => {
        res.status(400).send({
            status: 400,
            error: err,
        });
    });
});

// GET unread messages
router.get('/api/v1/messages/unread', (req, res) => {
    utils.getMessages().then((mssg) => {
        const unread = mssg.filter(message => message.status === "unread");
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
});

// GET sent messages
router.get('/api/v1/messages/sent', (req, res) => {
    utils.getMessages().then((mssg) => {
        const unsent = mssg.filter(message => message.status === "sent");
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
});

// GET message by Id
router.get('/api/v1/messages/:messageId', (req, res) => {
    const id = Number(req.params.messageId);
    utils.getMessageById(id).then((message) => {
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
});

// DELETE message by Id
router.delete('/api/v1/messages/:messageId', (req, res) => {
    const id = Number(req.params.messageId);
    utils.deleteMessageById(id).then((deleted) => {
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
});

module.exports = router;