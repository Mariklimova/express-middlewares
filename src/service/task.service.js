const { json } = require('express')
const fs = require('fs');

function getAllTask() {
    const jsonString = fs.readFileSync('./src/repository/storage2.json');
    const arr = JSON.parse(jsonString)
    if (!arr.length) throw new Error('database is empty')
    return arr
}

function getTaskById(id) {
    const jsonString = fs.readFileSync('./src/repository/storage2.json')
    const arr = JSON.parse(jsonString);
    const filt = arr.filter(el => el.id == id)
    if (!filt.length) throw new Error('this id not found')
    return filt[0]
}

function createNewTask(text, time, complexity, scores) {
    const jsonString = fs.readFileSync('./src/repository/storage2.json')
    const arr = JSON.parse(jsonString);
    const newObj = {
        id: Math.max(...arr.map(el => el.id)) + 1,
        text: text,
        time: time,
        complexity: complexity,
        scores: scores
    }
    arr.push(newObj);
    fs.writeFileSync('./src/repository/storage2.json', JSON.stringify(arr))
    return arr
}

function updateDataById(id, text, time, complexity, scores) {
    const jsonString = fs.readFileSync('./src/repository/storage2.json')
    const arr = JSON.parse(jsonString);
    const index = arr.findIndex(el => el.id == id);
    if (index < 0) throw new Error('this id not found');
    const newObj = {
        id, text, time, complexity, scores
    }
    arr[index] = newObj;
    fs.writeFileSync('./src/repository/storage2.json', JSON.stringify(arr))
    return arr
}

function deleteTaskById(id) {
    const jsonString = fs.readFileSync('./src/repository/storage2.json');
    const arr = JSON.parse(jsonString);
    const delTask = arr.filter(el => el.id != id);
    if (delTask.length == arr.length) throw new Error('this id not found')
    return delTask
}

function updateTaskById(id, body) {
    const jsonString = fs.readFileSync('./src/repository/storage2.json');
    const arr = JSON.parse(jsonString);
    const index = arr.findIndex((el) => el.id == id);
    if (index < 0) throw new Error('this id not found');
    const item = arr[index];
    arr[index]={...item,...body};
    fs.writeFileSync('./src/repository/storage2.json',JSON.stringify(arr));
    return arr
}

module.exports = { getAllTask, getTaskById, createNewTask, updateDataById, deleteTaskById,updateTaskById }