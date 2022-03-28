const { Schema } = require('mongoose')

const Person = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: false },
    cover: { type: String, required: false },
    age: { type: Number, require: true },
    location: { type: String, require: true },
    hobbies: { type: String, required: false },
    interests: { type: String, required: false },
    friends: [{ type: Schema.Types.ObjectId, ref: 'Person', required: false }],
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post', required: false }],
    groups: [{ type: Schema.Types.ObjectId, ref: 'Group', required: false }]
  },
  { timestamp: true }
)

module.exports = Person
