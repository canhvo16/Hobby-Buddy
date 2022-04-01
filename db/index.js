const mongoose = require('mongoose')
require('dotenv').config()

let dbUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : 'mongodb+srv://canhvo16:hobbybuddy@hobby-buddy.lrclf.mongodb.net/hobbyBuddyDatabase?retryWrites=true&w=majority'

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('Successfully connected to mongoDB!')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db
