const router = require('express').Router();
const User = require('../dataBase/models/User');
const { passwordHasher } = require('../helpers');

router.post('/', (req, res) => {
    const { email, password } = req.body;

    const user = User.findOne({ email });

    if (!user) {
        throw new Error('No user');
    }

    passwordHasher.compare(password, user.password);
    res.json('OK');
});

module.exports = router;
