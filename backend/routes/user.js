const router = require("express").Router();
const userController = require("../controller/userController");
const verifyToken = require("../middleware/verifyToken");
router.get("/get-me", verifyToken, userController.getMe);

module.exports = router;
