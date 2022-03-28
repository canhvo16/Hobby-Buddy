const {} = require('../models')

const getPersons = async (req, res) => {
  try {
    const person = await Person.find()
    return res.status(201).send(person)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getPersons
}
