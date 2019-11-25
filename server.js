// Dependencies 
var express = require("express");

// express servers
var app = express();

// inital port
var PORT = process.env.PORT || 3000;

// express app for data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listener
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});

