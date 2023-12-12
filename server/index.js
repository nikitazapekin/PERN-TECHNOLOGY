//npm  i express pg pg-hstore sequelize cors dotenv
//npm i -D nodemon
//http://localhost:5000
//npm run dev
//npm i express-fileupload
//npm i uuid
//http://localhost:5000/api/user/login
// npm i path
//https://jwt.io/
require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
//const errorHandler = require('./')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
 
// Обработка ошибок, последний Middlewarersd
app.use(errorHandler)  // обработчик ошибок должен быть в конце так как на нем работа завершается

app.get('/', (req, res)=> {
    res.status(200).json({
        message: "Work"
    })
})
const start = async () => {
    try {
        await sequelize.authenticate()
       await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()