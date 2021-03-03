const { statusCodesEnum } = require('../constants');
const { errorMessages } = require('../error');
const { userValidators } = require('../validators');
const User = require('../dataBase/models/User');

module.exports = {
    async isIdValid(req, res, next) {
        try {
            const userId = req.params;
            if (userId.length !== 24) {
                throw new Error(errorMessages.BAD_ID);
            }

            await next();
        } catch (e) {
            res.status(statusCodesEnum.BAD_REQUEST).json(e.message);
        }
    },
    async isUserValid(req, res, next) {
        try {
            const { email } = req.body;
            const { error } = await userValidators.createUserValidator.validate(req.body);
            if (error) {
                throw new Error(error.details[0].message);
            } if (await User.findOne({ email })) {
                throw new Error(errorMessages.BAD_EMAIL);
            }

            await next();
        } catch (e) {
            res.status(statusCodesEnum.BAD_REQUEST).json(e.message);
        }
    }
};
