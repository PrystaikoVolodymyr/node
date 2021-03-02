const errorCodes = require('../constants/errorCode.enam');
const errorMessages = require('../error/error.messeges');
const User = require('../dataBase/models/User');

module.exports = {
    async isUserValid(req, res, next) {
        try {
            const {
                name, age, language = 'en'
            } = req.body;

            if (!name || !age) {
                throw new Error('Some field is empty');
            } if (age < 18) {
                throw new Error(errorMessages.BAD_AGE[language]);
            } if (await User.findOne({ name })) {
                throw new Error(errorMessages.BAD_EMAIL[language]);
            }

            await next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },
    async isIdValid(req, res, next) {
        try {
            const userId = req.params;

            if (userId.length < 26) {
                throw new Error(errorMessages.BAD_AGE[1]);
            }

            await next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
