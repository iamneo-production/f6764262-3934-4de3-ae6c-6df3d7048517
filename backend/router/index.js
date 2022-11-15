const auth = require("./auth");
const account = require("./account");
module.exports = (app) => {
  app.use("/auth", auth);
  app.use("/account", account);
  // etc..
};
