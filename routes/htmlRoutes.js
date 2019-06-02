var db = require("../models");
const path = require("path");


module.exports = (app) => {
  app.get("/table", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/pages/table.html"));
  });

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/pages/index.html"));
  });

  app.get("/userbreakdown", (req, res) => {
    res.sendFile(path.join(__dirname, "/../userbreakdown.html"));
  });
  // Render 404 page for any unmatched routes
  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/pages/404.html"));
  });
};

