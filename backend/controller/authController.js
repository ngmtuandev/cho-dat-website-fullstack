const asyncHandler = require("express-async-handler");
const db = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authController = {
  register: asyncHandler(async (req, res) => {
    const { name, phone, email, password, role } = req.body;
    if (phone && password && name) {
      const response_user = await db.User.findOrCreate({
        where: { phone },
        defaults: { name, phone, password, role },
      });
      console.log("check rs:", response_user[1]);
      return res.json({
        status: response_user[1] ? 0 : 1,
        message: response_user[1]
          ? "Tạo tài khoản thành công"
          : "Tài khoản này đã tồn tại",
      });
    }
  }),
  login: asyncHandler(async (req, res) => {
    const { phone, password } = req.body;
    if (phone && password) {
      const findUser = await db.User.findOne({ where: { phone } });
      if (findUser) {
        const comparePassword = await bcrypt.compareSync(
          password,
          findUser.password
        );
        const token = await jwt.sign(
          { id: findUser.id, role: findUser.role },
          process.env.JWT_SECRECT,
          { expiresIn: "3d" }
        );
        return res.json({
          status: comparePassword ? "0" : "1",
          message: comparePassword
            ? "Đăng nhập thành công"
            : "Đăng nhập thất bại",
          token: comparePassword && token,
        });
      }
    } else {
      res.status(401).json({
        status: 1,
        message: "Thông tin đăng nhập không hợp lệ",
      });
    }
  }),
};

module.exports = authController;
