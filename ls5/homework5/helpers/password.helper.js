const bcrypt = require('bcrypt');
const { errorMessages } = require('../error');

module.exports = {
    hash: (password) => bcrypt.hash(password, 10),
    compare: async (password, hashPassword) => {
        const isPasswordEquals = await bcrypt.compare(password, hashPassword);

        if (!isPasswordEquals) {
            throw new Error(errorMessages.BAD_SOME);
        }
    }
};
