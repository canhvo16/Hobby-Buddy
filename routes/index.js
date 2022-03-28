const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/person', controllers.getPersons)

module.exports = router
