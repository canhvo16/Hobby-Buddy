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

const createPost = async (req, res) => {
  try {
    const personId = req.body.name
    const person = await Person.findById(personId)
    const post = await new Post(req.body)
    await post.save()
    await Person.findByIdAndUpdate(personId, {
      posts: [...person.posts, post._id]
    })
    return res.status(201).json({ post })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createGroup = async (req, res) => {
  try {
    const group = await new Group(req.body)
    await group.save()
    return res.status(201).json({ group })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updatePerson = async (req, res) => {
  try {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(201).json(person)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(201).json(post)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateGroup = async (req, res) => {
  try {
    const group = await Group.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(201).json(group)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deletePerson = async (req, res) => {
  try {
    const person = await Person.findByIdAndDelete(req.params.id)
    if (person) {
      res.status(201).send('Person deleted')
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id)
    if (post) {
      res.status(201).send('Post deleted')
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteGroup = async (req, res) => {
  try {
    const group = await Group.findByIdAndDelete(req.params.id)
    if (group) {
      res.status(201).send('Group deleted')
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const checkUser = async (req, res) => {
  try {
    const person = await Person.find(req.params).exec()
    if (person.length > 0) {
      res
        .status(201)
        .send(
          `Sorry, ${req.params.username} has already been taken, please try another one!`
        )
    } else {
      res.status(201).send('Username available!')
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const verifyUser = async (req, res) => {
  try {
    const person = await Person.find(req.params).exec()
    if (person) {
      res.status(201).json(person)
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getUserPosts = async (req, res) => {
  console.log(req.params)
  try {
    const posts = await Post.find({ name: req.params.id }).exec()
    if (posts) {
      res.status(201).json(posts)
    }
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
  createPerson,
  createPost,
  createGroup,
  updatePerson,
  updatePost,
  updateGroup,
  deletePerson,
  deletePost,
  deleteGroup,
  checkUser,
  verifyUser,
  getUserPosts
}
