const router = require('express').Router();
const { getUsers, getOneUser, createUser } = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/:id', getOneUser);
router.post('/', createUser);

module.exports = router;
