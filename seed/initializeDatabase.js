const db = require('../db')
const { Person, Post, Group } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const person1 = await new Person({
    name: 'Canh',
    username: 'canhvo16',
    password: 'coding',
    photo:
      'https://img.freepik.com/free-vector/happy-sushi-salmon-flat-cartoon-style_138676-2635.jpg?size=338&ext=jpg',
    age: 24,
    location: 'Chicago, IL',
    hobbies: 'Volleyball, Cooking, Lifting',
    interests: 'Coding, Making Tiktoks'
  })
  await person1.save()

  const post1 = await new Post({
    name: [person1._id],
    text: 'This is my first post!',
    likes: [person1._id]
  })
  await post1.save()

  const group1 = await new Group({
    owner: [person1._id],
    name: 'My First Group',
    members: [person1._id]
  })
  await group1.save()

  console.log("Canh's profile, first post, and first group created!")
}

const run = async () => {
  await Person.deleteMany()
  await Post.deleteMany()
  await Group.deleteMany()
  await main()
  db.close()
}

run()
