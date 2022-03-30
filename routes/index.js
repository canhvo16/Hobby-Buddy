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

router.post('/group', controllers.createGroup)

router.put('/person/:id', controllers.updatePerson)

router.put('/post/:id', controllers.updatePost)

router.put('/group/:id', controllers.updateGroup)

router.delete('/person/:id', controllers.deletePerson)

router.delete('/post/:id', controllers.deletePost)

router.delete('/group/:id', controllers.deleteGroup)

router.get('/checkPerson', controllers.checkUser)

module.exports = router
