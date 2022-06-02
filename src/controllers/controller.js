const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/intuitive-care')

const router = express.Router()

const api = require('./src/csvArray')

router.post('/register', async (req, res) => {
    const arrayOfObjects = req.body
    if (await register(arrayOfObjects)) {
        res.status(400).send('Registro realizado com sucesso!')
    } else {
        res.send(500)('ERROR')
    }

})

router.get('/search', async (req, res) => {
    const search = req.query.search
    const Name = req.query.name
    const result = await searchByName(search)
    res.send(result)
})

router.put('/update', async (req, res) => { 
    const arrayOfObjects = req.body
    if (await updateOne(arrayOfObjects)) {
        res.status(400).send('Registro atualizado com sucesso!')
    } else {
        res.send(500)('ERROR')
    }
})

router.delete('/delete', async (req, res) => {
    const arrayOfObjects = req.body
    if (await deleteOne(arrayOfObjects)) {
        res.status(400).send('Registro deletado com sucesso!')
    } else {
        res.send(500)('ERROR')
    }
})

module.exports = app => app.use('/regsterModel', router)