const auth = require("./auth");
const {
  handleErr,
  requestNotMatchRoute,
} = require("../middleware/configHandleError");
const initRoutes = (app) => {
  // success
  app.use("/api/v1/auth", auth);

  // errorr
  // handler error if route error
  app.use("/", requestNotMatchRoute);
  app.use(handleErr);
};

module.exports = initRoutes;
