const router = require("express").Router();
const auth = require("../Middlware/middlware")
const EvenCont = require("../Controllers/ContEvent");
const ResCont =require("../Controllers/ContReservation")

router.use(auth);

router.get('/event/:idE',EvenCont.getEventOrg);
router.get('/res/:idR/:idE',ResCont.getResrEvent);

router.post('/event',EvenCont.createEvent);
router.put('/event/:id',EvenCont.updateEvent);
router.delete('/event/:id',EvenCont.deleteEvent);

router.patch('/event/:id/status',EvenCont.updateStatusEvent);

module.exports = router;