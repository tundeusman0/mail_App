import express from 'express';
import bodyParser from "body-parser";
import user from './routes/user_routes';
import messages from './routes/messages_routes';

// init App
const app = express();

// heroku Port
const port = process.env.PORT || 3000;

// body Parser middleware
app.use(bodyParser.json());

app.use('/api/v1/auth/', user);
app.use('/api/v1/messages', messages);

app.listen(port, () => {
    console.log(`Strated up at port ${port}`);
});

export default app;