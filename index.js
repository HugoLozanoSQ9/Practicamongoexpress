//importamos express
const express = require('express')
//importamos el server
const server = require('./server')
// Le indicamos que lo que reciba el server lo convierta a json
server.use(express.json())
//definimos el puerto
const port = 8080

server.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})
