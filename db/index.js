const mongoose = require('mongoose')

mongoose
  .connect('mongodb://127.0.0.1:27017/foodTrucksDatabase')
  .then(() => {
    console.log('Successfully connected to mongoDB!')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db
