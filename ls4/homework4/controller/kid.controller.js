const kidsService = require('../service/kid.service');
// const Car = require('../dataBase/models/Car');
const errorCodes = require('../constants/errorCode.enam');

module.exports = {
    getAllKids: async (req, res) => {
        try {
            const kids = await kidsService.getKids();
            res.json(kids);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },
    getSuchKid: async (req, res) => {
        try {
            const { kidId } = req.params;
            const kid = await kidsService.findKidById(kidId);
            res.json(kid);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },
    deleteKid: async (req, res) => {
        try {
            const { kidId } = req.params;
            const car = await kidsService.deleteKid(kidId);

            res.json(`${JSON.stringify(car)} is deleted`);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },
    createKid: async (req, res) => {
        try {
            const kid = req.body;
            await kidsService.createKid(kid);
            res.status(200).json('Created');
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
