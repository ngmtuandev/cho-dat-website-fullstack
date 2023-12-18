const auth = require("./auth");
const user = require("./user");
const {
  handleErr,
  requestNotMatchRoute,
} = require("../middleware/configHandleError");
const initRoutes = (app) => {
  // success
  app.use("/api/v1/auth", auth);
  app.use("/api/v1/user", user);

  // errorr
  // handler error if route error
  app.use("/", requestNotMatchRoute);
  app.use(handleErr);
};

module.exports = initRoutes;
