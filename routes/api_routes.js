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

module.exports = router;