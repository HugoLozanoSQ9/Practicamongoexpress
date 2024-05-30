const express = require('express')
const server = express()
server.use(express.json())

const kodersRouter = require('./koders.router')


//Get principal de la API
server.get('/', (req, res) => {
    res.json({
        message: "Mongo Apiv1"
    })
})

server.use('/koders',kodersRouter)
module.exports = server