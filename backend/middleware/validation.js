const validationRequest = (schemaJoi) => (req, res, next) => {
  const { error } = schemaJoi.validate(req.body);
  if (error) {
    return res.status(401).json({
      mess: "Định dạng gửi lên không đúng",
    });
  }
  next();
};

module.exports = validationRequest;
