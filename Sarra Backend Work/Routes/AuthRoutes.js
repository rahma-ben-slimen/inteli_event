const router = require("express").Router();
const auth = require("../Controllers/ContAuth");

router.post("/login", auth.login);
router.post("/create", auth.register);

module.exports = router;