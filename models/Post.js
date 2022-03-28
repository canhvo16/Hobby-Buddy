const { Schema } = require('mongoose')

const Post = new Schema(
  {
    name: [{ type: Schema.Types.ObjectId, ref: 'Person', required: true }],
    photo: [{ type: String, required: false }],
    text: { type: String, required: true },
    likes: [{ type: Schema.Types.ObjectId, ref: 'Person', required: false }]
  },
  { timestamp: true }
)

module.exports = Post
