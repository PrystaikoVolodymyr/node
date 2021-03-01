const router = require('express').Router();
const userRouter = require('./user.router');
const kidsRouter = require('./kid.router');

router.use('/users', userRouter);
router.use('/kids', kidsRouter);

module.exports = router;
