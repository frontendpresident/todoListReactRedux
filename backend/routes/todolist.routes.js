module.exports = app => {
    const todoList = require('../controllers/todolist.controller')
    const router = require('express').Router()

    router.post('/', todoList.create);

    router.get('/tasks', todoList.getAll);

    router.delete('/delete/:id', todoList.delete);

    router.delete('/delete-all', todoList.deleteAll);

    router.put('/update-status/:id', todoList.changeStateTasks);

    app.use('/', router);
}