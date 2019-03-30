import jwt from "jsonwebtoken";
import uuidv4 from "uuid/v4";
import * as EmailValidator from 'email-validator';
import { User } from "../utils/utils";
import { users } from "../utils/seed";

exports.signUp = (req, res) => {
    const {
        email, password, firstName, lastName,
    } = req.body;
    const id = uuidv4();
    const token = jwt.sign({ id }, "okay");
    const emailIsValid = EmailValidator.validate(email);
    const user = new User(id, email, firstName, lastName, password, token);
    if (emailIsValid) {
        users.newUser(user).then(() => {
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
        users.getUser(login).then((user) => {
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