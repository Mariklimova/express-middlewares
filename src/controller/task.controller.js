const express = require('express');
const { getAllUser } = require('../service/task.service')

const route = express.Router();

route.get('/', (req, res) => {
    try {
        const data = getAllUser()
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = route