const mongoose = require('mongoose')
require('dotenv').config()
const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env

const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=kodemia`

function createKoder(req, res, elementToCreate) {
    let { firstName, lastName, email, birthDate, generation } = req.body
    try {
        mongoose.connect(MONGO_URI)
            .then(() => {
                console.log('conexion exitosa')
                //insertar datos
                //.create regresa una promesa por lo que podemos poner otro then y otro catch
                elementToCreate.create(

                    {
                        firstName,
                        lastName,
                        email,
                        birthDate,
                        generation
                    }

                ).then(() => {

                    res.json({
                        message: "koder added",
                    })
                }).catch((error) => {
                    next(error)
                    console.log('Error al crear koder', error)
                })

            }).catch((error) => {
                next(error)
                console.error('Error al conectar con la base de datos', error)
            })

    } catch (error) {
        res.status(error.status || 500)

        res.json({
            //Por defecto muestra el error que está definido 
            error: error.message
        })
    }
}

module.exports = createKoder