const router = require('express').Router();

const {
    getAllUsers,
} = require('../controllers/UserController');
router.get('/', getAllUsers);

module.exports = router;