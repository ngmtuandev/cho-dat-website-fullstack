const asyncHandler = require("express-async-handler");
const db = require("../models/index");

const userController = {
  getMe: asyncHandler(async (req, res) => {
    const { id } = req.info_user;
    console.log("id verify token ????", id);
    const rs = await db.User.findByPk(id, {
      attributes: {
        exclude: ["password"],
      },
    });
    console.log("rs >>>>>>>>>>>>>>", rs);
    return res.status(201).json({
      status: 0,
      message: "get successfully",
      data: rs,
    });
  }),
};

module.exports = userController;
