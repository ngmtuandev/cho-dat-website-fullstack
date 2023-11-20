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
    })
  ),
  authController.register
);

module.exports = router;
