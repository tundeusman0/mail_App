const express = require('express');

const router = express.Router();
const utils = require('./../utils/utils');


router.post('/api/v1/auth/signup', (req, res) => {
    const {
 id, email, password, firstName, lastName, token,
} = req.body;
    const user = {
        id, email, password, firstName, lastName,
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

module.exports = router;