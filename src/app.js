const express = require('express');
const bodyParser = require('body-parser');
const routeUser = require('./controller/user.controller');
const routeTask = require('./controller/task.controller');

const app = express();

app.use(bodyParser.json());

app.use('/user', routeUser);
app.use('/task', routeTask);

app.use((error, req, res, next) => res.send(error.message))

module.exports = { app };