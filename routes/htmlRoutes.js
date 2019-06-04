var db = require("../models");
const path = require("path");


module.exports = (app) => {
  app.get("/table", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/pages/table.html"));
  });
// Home page
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/pages/index.html"));
  });
// User breakdown page
  app.get("/userbreakdown", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/pages/userbreakdown.html"));
  });
<<<<<<< HEAD


=======
>>>>>>> 60692ab1c1a49d316a82f781dcfc1166f88b49de
  // Render 404 page for any unmatched routes
  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/pages/404.html"));
  });
};

