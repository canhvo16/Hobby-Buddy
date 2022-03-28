const { Schema } = require('mongoose')

const Group = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'Person', required: true },
    name: { type: String, required: true },
    photo: { type: String, required: false },
    cover: { type: String, required: false },
    members: [{ type: Schema.Types.ObjectId, ref: 'Person', required: true }],
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post', required: false }]
  },
  { timestamp: true }
)

module.exports = Group
