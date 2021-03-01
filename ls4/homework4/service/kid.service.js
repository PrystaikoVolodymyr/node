const Kids = require('../dataBase/models/Kid');

module.exports = {
    findKidById: (kidId) => Kids.findById(kidId),
    getKids: () => Kids.find(),
    createKid: (kidObject) => Kids.create(kidObject),
    deleteKid: (kidId) => Kids.findByIdAndDelete(kidId)
};
