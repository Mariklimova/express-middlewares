const {json} = require('express')
const fs = require('fs');

function getAllUser() {
    const jsonString = fs.readFileSync('./src/repository/storage2.json');
    const arr = JSON.parse(jsonString)
   if (!arr.length) throw new Error('database is empty')
    return arr
}


module.exports = {getAllUser}