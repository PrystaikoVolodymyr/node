const User = require('../dataBase/models/User');

module.exports = {
    findUserById: (userId) => User.findById(userId),
    getUsers: (params) => User.find(params),
    createUser: (userObject) => User.create(userObject),
    deleteUser: (userId) => User.findByIdAndDelete(userId)
};
