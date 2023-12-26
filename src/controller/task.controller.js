const express = require('express');
const { getAllTask, getTaskById, createNewTask, updateDataById, deleteTaskById, updateTaskById } = require('../service/task.service')

const route = express.Router();

route.get('/', (req, res) => {
    try {
        const data = getAllTask()
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

route.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const dataId = getTaskById(id);
        res.status(200).send(dataId)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

route.post('/', (req, res) => {
    try {
        const { text, time, complexity, scores } = req.body;
        const newTask = createNewTask(text, time, complexity, scores);
        res.status(200).send(newTask)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

route.put('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { text, time, complexity, scores } = req.body;
        const newTask = updateDataById(id,text, time, complexity, scores);
        res.status(200).send(newTask)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

route.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const delTask = deleteTaskById(id);
        res.status(200).send(delTask)
    } catch (error) {
        res.status(400).send(error.message);
    }
});

route.patch('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const newElem = updateTaskById(id, body);
        res.status(200).send(newElem);
    } catch (error) {
        res.status(400).send(error.message)
    }

})

module.exports = route