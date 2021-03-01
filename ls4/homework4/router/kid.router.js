const router = require('express').Router();
const kidsController = require('../controller/kid.controller');
const kidMiddleware = require('../middleware/kid.middleware');

router.get('/', kidsController.getAllKids);
router.get('/:userId', kidsController.getSuchKid);
router.delete('/:userId', kidsController.deleteKid);
router.post('/', kidMiddleware.isUserValid, kidsController.createKid);

module.exports = router;
