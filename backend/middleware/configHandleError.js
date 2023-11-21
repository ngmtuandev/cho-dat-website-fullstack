const handleErr = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  return res.status(statusCode).json({
    success: false,
    mess: error.message,
  });
};

const requestNotMatchRoute = (req, res, next) => {
  const err = new Error(`Route ${req.originalUrl} not match`);
  res.status(404);
  next(err);
};

module.exports = {
  handleErr,
  requestNotMatchRoute,
};
