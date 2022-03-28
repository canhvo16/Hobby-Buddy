const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/person', controllers.getPersons)

router.get('/person/:id', controllers.getPersonById)

module.exports = router
