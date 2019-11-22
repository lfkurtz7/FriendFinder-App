// Dependencies 
var express = require("express");
var path = require("path");

// express server
var app = express();
// inital port
var PORT = process.env.PORT || 3000;

// express app for data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// router
app.get("/", function(req, res){
  res.json("hshhshshsh")
})
//require("./routes/apiRoutes")(app);
//require("./routes/htmlRoutes")(app);

// listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

