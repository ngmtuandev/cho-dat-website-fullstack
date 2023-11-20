const auth = require("./auth");

const initRoutes = (app) => {
  app.use("/api/v1/auth", auth);
};

module.exports = initRoutes;
