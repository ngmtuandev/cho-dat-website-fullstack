const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req?.headers?.authorization?.startsWith("Bearer");
  if (!token)
    return res.status(401).json({
      status: 1,
      message: "Verify Token fail",
    });
  console.log("token : ", token);
  const getToken = req?.headers?.authorization?.split(" ")[1];
  jwt.verify(getToken, process.env.JWT_SECRECT, (error, decode) => {
    if (error) {
      return res.status(401).json({
        status: 1,
        message: "Verify Token fail",
      });
    } else {
      req.info_user = decode;
      next();
    }
  });
};

module.exports = verifyToken;
