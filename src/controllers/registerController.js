const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
const Register = require('../models/registerModel')

router.post('/register', async (req, res) => {
    const arrayOfObjects = req.body
    if (await Register.create(arrayOfObjects)) {
        return res.status(200).send('Registro realizado com sucesso!')
    } else {
        return res.send(500)('ERROR')
    }
})

router.get('/search', async (req, res) => {
    try { 
        const registers = await Register.find();

        return res.send({ registers });
    } catch (err) {
        return res.status(500).send({ error: 'Falha na consulta' });
    }
});

router.put('/update/:id', async (req, res) => { 
    const arrayOfObjects = req.body
    try {
        const registers = await Register.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.send({ registers });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ error: 'Falha na atualização' });
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        await Register.findByIdAndRemove(req.params.id);
        console.log('Deletado com sucesso!');
        return res.send();
    } catch (err) {
        return res.status(500).send({ error: 'Falha na remoção' });
    }
})

module.exports = app => app.use('/registerModel', router)