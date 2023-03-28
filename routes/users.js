const express = require('express');
const router = express.Router();
const userController = require('../controllers/users_controller');

router.get('/profile',userController.profile);
router.get('/posts',userController.posts);
router.get('/signUpPage',userController.signUpPage);
router.get('/signInPage',userController.signInPage);
router.post('/create',userController.create);

module.exports = router;

