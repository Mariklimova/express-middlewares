const express = require('express');
const { getAllUser, getUserById, createNewUser, updateDataById, deleteElementById, updateById } = require('../service/user.service')
const { isValidUser,isValidUserId } = require('../helper/validation');

const route = express.Router();

route.get('/', (req, res) => {
    try {
        const data = getAllUser();
        res.status(200).send(data);

    } catch (error) {
        res.status(404).send(error.message);
    }
});

route.get('/:id',isValidUserId, (req, res) => {
    try {
        const { id } = req.params;
        const dataId = getUserById(id);
        res.status(200).send(dataId);

    } catch (error) {
        res.status(404).send(error.message);
    }
});

route.put('/:id', isValidUser,isValidUserId, (req, res) => {
    try {
        const { id } = req.params;
        const { name, surname, email, pwd } = req.body;
        const newData = updateDataById(id, name, surname, email, pwd)
        res.status(200).send(newData);

    } catch (error) {
        res.status(404).send(error.message);
    }
});

route.post('/', isValidUser, (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const newUser = createNewUser(name, surname, email, pwd)
        res.status(200).send(newUser);

    } catch (error) {
        res.status(404).send(error.message);
    }
});
route.delete('/:id',isValidUserId, (req, res) => {
    try {
        const { id } = req.params;
        const delUser = deleteElementById(id)
        res.status(200).send(delUser);

    } catch (error) {
        res.status(404).send(error.message);
    }
});

route.patch('/:id',isValidUserId, (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const newElement = updateById(id, body)
        res.status(200).send(newElement);

    } catch (error) {
        res.status(404).send(error.message);
    }
});

module.exports = { route };