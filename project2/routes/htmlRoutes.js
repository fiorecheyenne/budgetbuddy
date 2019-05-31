module.exports = function(app) {
  app.get("/table", function(req, res) {
    res.render("table");
  });

  // THE FOLLOWING .GET DOES THE SAME THING EXCEPT YOU DONT NEED TO TYPE /TABLE TO GET TO THE HOME PAGE.
  // app.get("/index", function(req, res) {
  //   res.render("index");
  // });

  app.get("/", function(req, res) {
    res.render("index");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
