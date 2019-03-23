import jwt from "jsonwebtoken";
import uuidv1 from "uuid/v1";
import * as EmailValidator from 'email-validator';
import {
    addUser, getUser,
} from "../utils/utils";

exports.signUp = (req, res) => {
    const {
        email, password, firstName, lastName,
    } = req.body;
    const id = uuidv1();
    const token = jwt.sign({ id }, "okay");
    const user = {
        id, email, password, firstName, lastName, token,
    };
    const emailIsValid = EmailValidator.validate(email);

    if (emailIsValid) {
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
    } else {
        res.status(400).send({
            status: 400,
            error: "email is invalid",
        });
    }
};

exports.signIn = (req, res) => {
    const { email, password } = req.body;
    const login = {
        email, password,
    };
    const emailIsValid = EmailValidator.validate(email);
    if (emailIsValid) {
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
    } else {
        res.status(400).send({
            status: 400,
            error: "email is invalid",
        });
    }
};