const router = require('express').Router();
const { getUsers, getOneUser, createUser } = require('../controllers/users');

router.get('/', getUsers);
router.get('/:id', getOneUser);
router.post('/', createUser);

module.exports = router;
