import express from 'express';
import {
    addUser, getUser,
} from "../utils/utils";

const router = express.Router();

// POST signup
router.post('/api/v1/auth/signup', (req, res) => {
    const {
        id, email, password, firstName, lastName, token,
    } = req.body;
    const user = {
        id, email, password, firstName, lastName, token,
    };
    addUser(user).then(() => {
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

    getUser(login).then((user) => {
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

export default router;