const errorCodes = require('../constants/errorCode.enam');
const errorMessages = require('../error/error.messeges');

module.exports = {
    async isUserValid(req, res, next) {
        try {
            const {
                name, age, language = 'en'
            } = req.body;

            if (!name || !age) {
                throw new Error('Some field is empty');
            } if (age > 18) {
                throw new Error(errorMessages.BAD_AGE[language]);
            }
            await next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
