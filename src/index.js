const { append } = require('express/lib/response')
const fs = require('fs')
const express = require('express')

const app = express()

const allFileContents = fs.readFileSync('src/teste.csv', 'latin1')
allFileContents.split(/\r?\n/).forEach(line =>  {
    const lineArray = line.split(';')
})

app.listen(3000, () => { 
    console.log('Server running on port 3000')
})