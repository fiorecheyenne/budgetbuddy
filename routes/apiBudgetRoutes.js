var db = require("../models");

module.exports = function(app) {
  app.get("/api/budgets", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    db.Budget.findAll({
      where: query,
      include: [db.Users]
    }).then(function(dbBudgets) {
      res.json(dbBudgets);
    });
  });

  app.get("/api/budgets/:id", function(req, res) {
    db.Budget.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Users]
    }).then(function(dbbudgets) {
      res.json(dbbudgets);
    });
  });

  app.post("/api/budgets", function(req, res) {
      db.Budget.create(req.body).then(function (dbBudgets) {
          res.json(dbBudgets);
      });
  });

  app.delete("/api/posts/:id", function (req, res) {
      db.Budget.destroy({
          where: {
              id: req.params.id
          }
      }).then(function(dbBudgets) {
          res.json(dbBudgets);
      });
  })
};
