const User = require('../dataBase/models/User');
require('../dataBase/models/Kid');

module.exports = {
    findUserById: (userId) => User.findById(userId),
    getUsers: () => User.find(),
    createUser: (userObject) => User.create(userObject),
    deleteUser: (userId) => User.findByIdAndDelete(userId)
};
