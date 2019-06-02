var db = require("../models");
const path = require("path");


module.exports = function(app) {
  app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/pages/table.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/pages/index.html"));
  });

  // Render 404 page for any unmatched routes
  app.use("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/pages/404.html"));
  });
};

