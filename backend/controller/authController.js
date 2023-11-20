const asyncHandler = require("express-async-handler");

const authController = {
  register: asyncHandler(async (req, res) => {
    const { name, phone, email, password, role } = req.body;
    res.status(200).json({
      status: 0,
      mess: "success",
      data: { name, phone, email, password, role },
    });
  }),
};

module.exports = authController;
