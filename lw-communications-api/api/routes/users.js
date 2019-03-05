const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const checkAuth = require('../middelware/check-auth');

router.post('/signup', UserController.signup)

router.post('/login', UserController.login);

router.delete('/:id', checkAuth,UserController.deleteUser);

router.put('/:id', checkAuth, UserController.updateUser);

router.get('/', UserController.getAllUsers);

router.patch('/verify', UserController.verifyAndActivate);

router.put('/', checkAuth,UserController.resetPassword);

module.exports = router;