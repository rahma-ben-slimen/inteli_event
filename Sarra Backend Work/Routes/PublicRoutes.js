const router = require("express").Router();
const EventCont =require("../Controllers/ContEvent");
const CatCont =require("../Controllers/ContCategorie");
const ComCont = require("../Controllers/ContCommentaire");

router.get('/event',EventCont.getAllEvents);
router.get('/event/:id',EventCont.getEvent);

router.get('/cat',CatCont.getAllCat);
router.get('/cat/:id', CatCont.getCat);

router.get('/com',ComCont.getAllCom);

module.exports = router;