const router = require('express').Router();
const { userRouter, authRouter } = require('./index');

router.use('/users', userRouter);
router.use('/auth', authRouter);

module.exports = router;
