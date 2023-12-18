const router = require("express").Router();
const authController = require("../controller/authController");
const validateRequire = require("../middleware/validation");
const { numberRequire, stringRequire } = require("../middleware/joiSchema");
const joi = require("joi");
router.post(
  "/register",
  validateRequire(
    joi.object({
      name: stringRequire,
      phone: numberRequire,
      password: stringRequire,
      role: stringRequire,
    })
  ),
  authController.register
);

router.post(
  "/login",
  validateRequire(
    joi.object({
      phone: numberRequire,
      password: stringRequire,
    })
  ),
  authController.login
);

module.exports = router;
