const Router = require('express')
const router = new Router()
const TypeController = require('../controller/typeController')
const checkMiddleware= require('../middleware/checkMiddleware')


router.post('/', checkMiddleware('ADMIN'), TypeController.create)
router.get('/',TypeController.getAll)



module.exports= router