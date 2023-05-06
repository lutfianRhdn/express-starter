const router = require('express').Router();

const { getAllUsers, getUser } = require('../controllers/UserController');
const cache = require('../../../middlewares/cache.js')
router.get('/', getAllUsers);
router.get('/:id', cache('user'), getUser);
module.exports = router;