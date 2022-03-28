const mongoose = require('mongoose')
const PersonSchema = require('./Person')
const PostSchema = require('./Post')
const GroupSchema = require('./Group')

const Person = mongoose.model('persons', PersonSchema)
const Post = mongoose.model('posts', PostSchema)
const Group = mongoose.model('groups', GroupSchema)

module.exports = {
  Person,
  Post,
  Group
}
