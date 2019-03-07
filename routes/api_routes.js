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
    }).catch(() => {
        res.status(400).send({
            status: 400,
            error: "relevant-error-message",
        });
    });
});

// POST login
router.post('/api/v1/auth/login', (req, res) => {
    let { email, password } = req.body
    let login = {
        email, password
    }

    utils.getUser(login).then(user => {
        let token = user[0].token
        res.status(200).send({
            status: 200,
            data: [{
                token
            }]
        })
    }).catch(err => {
        res.status(400).send({
            status: 400,
            error: "relevant-error-message"
        })
    })

})

// POST messages
router.post('/api/v1/messages', (req, res) => {
    const { subject, message, id, createdOn } = req.body
    const status = "read";
    const parentMessageId = 105;
    const messag = {
        id, createdOn, subject, message, parentMessageId, status
    }
    utils.createMessage(messag).then(message => {
        res.status(200).send({
            status: 200,
            data: [{
                ...message
            }]
        })
    }).catch(err => {
        res.status(400).send({
            status: 400,
            error: "relevant-error-message"
        })
    })

})

// GET messages
router.get('/api/v1/messages', (req, res) => {
    utils.getMessages().then(mssg => {
        res.status(200).send({
            status: 200,
            data: mssg
        })
    }).catch(err => {
        res.status(400).send({
            status: 400,
            error: "relevant-error-message"
        })
    })

})

module.exports = router;