const { Person, Post, Group } = require('../models')

const getPersons = async (req, res) => {
  try {
    const person = await Person.find()
    return res.status(201).send(person)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPersonById = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id)
    return res.status(201).send(person)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPosts = async (req, res) => {
  try {
    const post = await Post.find()
    return res.status(201).send(post)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    return res.status(201).send(post)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getGroups = async (req, res) => {
  try {
    const group = await Group.find()
    return res.status(201).send(group)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getGroupById = async (req, res) => {
  try {
    const group = await Group.findById(req.params.id)
    return res.status(201).send(group)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createPerson = async (req, res) => {
  try {
    const person = await new Person(req.body)
    await person.save()
    return res.status(201).json({ person })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getPersons,
  getPersonById,
  getPosts,
  getPostById,
  getGroups,
  getGroupById,
  createPerson
}
