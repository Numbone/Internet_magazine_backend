require('dotenv').config()

const express = require('express')
const sequlize = require('./db')
const models = require('./model/model')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const fileUpload  =require('express-fileupload')
const router=require('./routes/index')
const ErrorHandling = require('./middleware/ErrorHandlingMiddleware')
const path=require('path')



const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api',router)



app.use(ErrorHandling)



const start = async () => {
    try {
        await sequlize.authenticate()
        await sequlize.sync()
        app.listen(PORT, () => {console.log(`server has been started ${PORT}`)})
    } catch (error) {
        console.log(error)
    }
}


start()