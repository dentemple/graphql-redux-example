const Users = require('./model')

const createUser = (req, res) => {
  Users.create({ ...req.body }, (err, document) => {
    if (err || !document) return res.status(400).end({ err, document })
    else return res.status(200).send(document)
  })
}

const getAllUsers = (_, res) => {
  Users.find({}, (err, document) => {
    if (err || !document) return res.status(400).end({ err, document })
    else return res.status(200).send(document)
  })
}

const getUser = (req, res) => {
  const { username } = req.params
  Users.findOne({ username }, (err, document) => {
    if (err || !document) return res.status(400).end({ err, document })
    else return res.status(200).send(document)
  })
}

const updateUser = (req, res) => {
  const { username } = req.params
  const { prop, replace } = req.body
  Users.findOneAndUpdate(
    { username },
    { [prop]: replace },
    { new: true },
    (err, document) => {
      if (err || !document) return res.status(400).end({ err, document })
      else return res.status(200).send(document)
    }
  )
}

const deleteUser = (req, res) => {
  const { username } = req.params

  Users.findOneAndRemove({ username }, (err, document) => {
    if (err || !document) return res.status(400).end({ err, document })
    else return res.status(200).send(document)
  })
}

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser
}
