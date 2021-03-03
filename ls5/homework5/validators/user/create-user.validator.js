const Joi = require('joi');
const { regexEnum, constants } = require('../../constants');

const pairSubScheme = Joi.object({
    name: Joi.string().alphanum()
});

module.exports = Joi.object({
    name: Joi
        .string()
        .alphanum()
        .min(2)
        .max(50)
        .required(),
    email: Joi
        .string()
        .regex(regexEnum.EMAIL_REGEXP)
        .required(),
    password: Joi
        .string()
        .regex(regexEnum.PASSWORD_REGEXP)
        .required(),
    sex: Joi
        .string()
        .required(),
    yearOfBorn: Joi
        .number()
        .integer()
        .min(constants.CURRENT_YEAR - 100)
        .max(constants.CURRENT_YEAR),
    married: Joi
        .boolean()
        .optional(),
    pair: pairSubScheme.when('married', { is: true, then: Joi.required() })
});
