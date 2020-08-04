const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()
const Operations = require('../Control');
const Employee = require('../model')

router.post('/create', (req, res) => {
    const regEmployee = req.body
    Operations.add(regEmployee, res);
})

router.post('/viewEmp/:id', (req, res) => {
    const id = req.params.id
    Operations.view(id, res);
})

router.delete('/deleteEmp/:id', (req, res) => {
    const id = req.params.id
    Operations.delete(id, res);
})

router.get('/listAll', (req, res) => {
    Operations.get_all(req, res)
})



module.exports = router;
