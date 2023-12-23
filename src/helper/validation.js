function isValidUser(req, res, next) {
    if (!req.body.hasOwnProperty('name')) throw new Error(' отсутствует поле name');
    if (!req.body.hasOwnProperty('surname')) throw new Error(' отсутствует поле surname');
    if (!req.body.hasOwnProperty('email')) throw new Error(' отсутствует поле email');
    if (!req.body.hasOwnProperty('pwd')) throw new Error(' отсутствует поле pwd');

    const { name, surname, email, pwd } = req.body;

    if (!name) throw new Error('name is empty');
    if (!surname) throw new Error('surname is empty');
    if (!email) throw new Error('email is empty');
    if (!pwd) throw new Error('pwd is empty');
    if (!isNaN(name)) throw new Error('Неправильный тип данных для name');
    if (!isNaN(surname)) throw new Error('Неправильный тип данных для surname');
    if (!/^[\w]+@[a-z]+\.[a-z]{2,5}$/gm.test(email)) throw new Error('Неправильный email');
    if (pwd.length < 8) throw new Error('Неправильный pwd');


    next()
}


function isValidUserId(req, res, next) {
    if (!req.params.hasOwnProperty('id')) throw new Error(' отсутствует поле id');

    const { id } = req.params;
    
    if (id < 0) throw new Error('id отрицательный');  
    if (typeof (id) != 'number' && typeof (id) != 'string') throw new Error('Неправильный тип данных для id');
    if(isNaN(id)) throw new Error('id не должен быть строкой');
    next()
}


module.exports = { isValidUser, isValidUserId }