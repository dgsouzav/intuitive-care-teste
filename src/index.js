const express = require('express')
const app = express()

require("./db/connection.js")

app.use(express.json())

require('./controllers/controller.js')(app)

app.listen(3000, () => { 
    console.log('Server running on port 3000')
})

module.exports = app