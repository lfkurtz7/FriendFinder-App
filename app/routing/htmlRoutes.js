var path = require("path");

module.exports = function(app) {
    // GET route to survey, displays survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
      });

      app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
      });
    
    // default route to homepage 
      // app.get("*", function(req, res) {
      //   res.sendFile(path.join(__dirname, "../public/home.html"));
      // });

}

