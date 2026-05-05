const router = require("express").Router();
const users = require("../Controllers/ContUsers");

router.get("/users", users.getAllUsers);
router.get("/user/:id",users.getUser);
router.put("/users/:id", users.updateUser);
router.delete("/users/:id", users.deleteUser);
router.patch("/users/:id/status", users.updateStatus);

module.exports = router;
