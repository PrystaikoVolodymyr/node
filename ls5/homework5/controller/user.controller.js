const { userService } = require('../service');
const { statusCodesEnum } = require('../constants');
const { passwordHasher } = require('../helpers');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const params = req.query;
            const users = await userService.getUsers(params);
            res.json(users);
        } catch (e) {
            res.status(statusCodesEnum.BAD_REQUEST).json(e.message);
        }
    },
    getSuchUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const user = await userService.findUserById(userId);
            res.json(user);
        } catch (e) {
            res.status(statusCodesEnum.BAD_REQUEST).json(e.message);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const { userId } = req.params;
            await userService.deleteUser(userId);

            res.json(statusCodesEnum.DONE);
        } catch (e) {
            res.status(statusCodesEnum.BAD_REQUEST).json(e.message);
        }
    },
    createUser: async (req, res) => {
        try {
            const { password } = req.body;
            const hashPassword = await passwordHasher.hash(password);

            await userService.createUser({ ...req.body, password: hashPassword });
            res.status(200).json('created');
        } catch (e) {
            res.status(statusCodesEnum.BAD_REQUEST).json(e.message);
        }
    }
};
