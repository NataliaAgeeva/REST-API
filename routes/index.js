const routes = require('express').Router();

const { createUser, getUsers } = require('./users');
const getCards = require('./cards');

routes.use('/users', getUsers);
routes.use('/users', createUser);
routes.use('/', getCards);

routes.all('/*', (req, res) => {
  res.status(404).json({ message: 'Запрашиваемый ресурс не найден' });
});

module.exports = routes;
