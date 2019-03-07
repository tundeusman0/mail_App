const express = require('express');
const bodyParser = require("body-parser");
const route = require('./routes/api_routes');

// init App
const app = express();

// body Parser middleware
app.use(bodyParser.json());

app.use('/', route);

app.listen(3000, () => {
    console.log("connected to port 3000");
});

module.exports = app;