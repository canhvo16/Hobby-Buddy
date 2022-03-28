const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/person', controllers.getPersons)

router.get('/post', controllers.getPosts)

router.get('/person/:id', controllers.getPersonById)

router.get('/post/:id', controllers.getPostById)

router.get('/group', controllers.getGroups)

router.get('/group/:id', controllers.getGroupById)

router.post('/person', controllers.createPerson)

router.post('/post', controllers.createPost)

module.exports = router
