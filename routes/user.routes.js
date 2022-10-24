

module.exports = (app) => {
  const user = require("../controllers/user.controller.js");
    const { authJwt } = require("../middlewares");

  let router = require("express").Router();

  router.get("/workers",user.serviceWorkers);
  router.get("/workers/:str", user.search);
  router.post("/workers/filter/:str", user.filter);
  router.delete("/:id",[authJwt.verifyToken], user.delete);

  app.use("/api/auth", router);

};



