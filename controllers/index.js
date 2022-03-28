const { Person } = require('../models')

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

module.exports = {
  getPersons,
  getPersonById
}
