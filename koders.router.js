const kodersUseCase = require('./koders.usecase')
const express = require('express')
//Crear un nuevo Router en express
//El router debe ser montado en koders por lo que todas las rutas van a ser relativas
const router = express.Router()

const Koder = require('./model')

router.post('/', (req, res,next) => {
    kodersUseCase(req,res,Koder)
})

module.exports=router