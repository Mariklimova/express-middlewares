

const { json } = require('express');
const fs = require('fs')

function getAllUser() {
    const jsonString = fs.readFileSync('./src/repository/storage.json');
    const arr = JSON.parse(jsonString);
    if (!arr.length) {
        throw new Error('database is empty')
    }
    return arr;
}

function getUserById(id) {
    const jsonString = fs.readFileSync('./src/repository/storage.json');
    const arr = JSON.parse(jsonString);
    const filt = arr.filter(el => el.id == id)
    if (!filt.length) {
        throw new Error('this id not found')
    }
    return filt[0];
}

function updateDataById(id, name, surname, email, pwd) {
    const jsonString = fs.readFileSync('./src/repository/storage.json');
    const arr = JSON.parse(jsonString);

    const index = arr.findIndex(el => el.id == id)
    if (index < 0) throw new Error('this id not found')
    const newObj = {
        id, name, surname, email, pwd
    }
    arr[index] = newObj
    fs.writeFileSync('./src/repository/storage.json', JSON.stringify(arr));
    return arr
}

function createNewUser(name, surname, email, pwd) {
    const jsonString = fs.readFileSync('./src/repository/storage.json');
    const arr = JSON.parse(jsonString);
    const newObj = {
        id: Math.max(...arr.map(el => el.id)) + 1,
        name: name,
        surname: surname,
        email: email,
        pwd: pwd
    }
    arr.push(newObj);
    fs.writeFileSync('./src/repository/storage.json', JSON.stringify(arr))
    return arr;

}

function deleteElementById(id) {
    const jsonString = fs.readFileSync('./src/repository/storage.json');
    const arr = JSON.parse(jsonString);
    const deleteElement = arr.filter(el => el.id != id)
    if (arr.length == deleteElement.length) throw new Error('this id not found');
    return deleteElement
}

function updateById(id, body) {
    const jsonString = fs.readFileSync('./src/repository/storage.json');
    const arr = JSON.parse(jsonString);
    const index = arr.findIndex((item) => item.id == id);
    if (index < 0) throw new Error('this id not found');
    const element = arr[index];
    arr[index] = { ...element, ...body };
    fs.writeFileSync('./src/repository/storage.json', JSON.stringify(arr));
    return arr
}


module.exports = { getAllUser, getUserById, createNewUser, updateDataById, deleteElementById, updateById }