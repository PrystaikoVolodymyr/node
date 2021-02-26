const fs = require('fs');
const { promisify } = require('util');

const DB = require('../dataBase/user');

const base = ('./dataBase/user.json');

const writeFilePromise = promisify(fs.writeFile);

module.exports = {
    findUserById: (userId) => DB[userId],
    deleteUser: (userId) => {
        const user = DB.splice(userId, 1);
        return user;
    },
    getUsers: (language) => {
        if (language) {
            const findUser = DB.filter((value) => value.language === language);
            return findUser;
        }
        return DB;
    },
    createUser: (userObject) => {
        DB.push(userObject);
        writeFilePromise(base, `${JSON.stringify(DB)}`).then();
    }
};
