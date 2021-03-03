const router = require('express').Router();
const { userController } = require('../controller');
const { userMiddlewares } = require('../middleware');

router.get('/', userController.getAllUsers);
router.get('/:userId', userMiddlewares.isIdValid, userController.getSuchUser);
router.delete('/:userId', userMiddlewares.isIdValid, userController.deleteUser);
router.post('/', userMiddlewares.isUserValid, userController.createUser);

module.exports = router;
