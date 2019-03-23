import express from 'express';
import users_controller from "../controller/users_controller";

const router = express.Router();

// POST signup
router.post('/signup', users_controller.signUp);

// POST login
router.post('/login', users_controller.signIn);


export default router;