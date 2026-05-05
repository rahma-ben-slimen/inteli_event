const router = require("express").Router();
const auth = require("../Middlware/middlware");
const CatCont =require("../Controllers/ContCategorie");
const EvenCont = require("../Controllers/ContEvent");
const ComCont = require("../Controllers/ContCommentaire");

router.use(auth);

router.get('/',CatCont.getAllCat);
router.get('/cat/:idCat',CatCont.getCat);
router.post('/cat',CatCont.createCat);
router.delete('/cat/:idCat',CatCont.deleteCat);
router.put('/cat/:idCat',CatCont.upddateCat);

router.patch("/event/:idEvent/status", EvenCont.updateStatusEvent);
router.get('/event',EvenCont.getAllEvents);
router.get('/event/:idEvent',EvenCont.getEvent);

router.get('/com',ComCont.getAllCom);
router.get('/com/:idCom',ComCont.getCom);
router.delete('/com/:idCom',ComCont.deleteCom);

module.exports = router;