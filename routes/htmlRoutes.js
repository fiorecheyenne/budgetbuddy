var db = require("../models");

module.exports = function(app) {
  app.get("/table", function(req, res) {
    res.render("table");
  });

  app.get("/index", function(req, res) {
    res.render("index");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
