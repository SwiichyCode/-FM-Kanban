const controller = require("../controllers/board.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/board/:id", controller.getBoard);
  app.post("/api/board/create", controller.createBoard);
  //   app.put("/api/board/:id", controller.updateBoard);
  //   app.delete("/api/board/:id", controller.deleteBoard);
};
