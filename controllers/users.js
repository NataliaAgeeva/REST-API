const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(200).send({ data: users }))
    .catch(() => res.status(500).json({ message: 'Произошла ошибка' }));
};

module.exports.getOneUser = (req, res) => {
  User.findById(req.params.id)
    .then((users) => res.status(200).send({ data: users }))
    .catch(() => res.status(404).json({ message: 'Произошла ошибка' }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.status(201).send({ data: user }))
    .catch(() => res.status(500).json({ message: 'Произошла ошибка' }));
};
