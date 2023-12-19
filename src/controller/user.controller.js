const express = require('express');
const { getAllUser, getUserById,createNewUser } = require('../service/user.service')
const route = express.Router();
route.get('/', (req, res) => {
    try {
        const data = getAllUser();
        res.status(200).send(data);

    } catch (error) {
        res.status(404).send(error.message);
    }
});

route.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const dataId = getUserById(id);
        res.status(200).send(dataId);

    } catch (error) {
        res.status(404).send(error.message);
    }
});

route.put('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { name, surname, email, pwd } = req.body;
        const newData = updateDataById(name, surname, email, pwd)
        res.status(200).send(newData);

    } catch (error) {
        res.status(404).send(error.message);
    }
});

route.post('/', (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const newUser = createNewUser(name, surname, email, pwd)
        res.status(200).send(newUser);

    } catch (error) {
        res.status(404).send(error.message);
    }
});

module.exports = { route };