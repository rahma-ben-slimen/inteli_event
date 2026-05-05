const router = require("express").Router();
const auth = require("../Middlware/middlware");
const ResCont = require("../Controllers/ContReservation");
const ComCont =require("../Controllers/ContCommentaire");

router.use(auth);

router.post('/event/:idE/res',ResCont.ajoutRes);
router.post('/event/:idE/com',ComCont.createCom);

module.exports = router;