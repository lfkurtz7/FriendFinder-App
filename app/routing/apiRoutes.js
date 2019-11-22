var friendsArray = require("../data/friends.js") 


module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(friendsArray);
    });


  app.post("/api/friends", function(req, res) {
    var friendMatch = {
      name: "",
      photo: "",
      friendDifference: 1
    
    };
  var newFriendData = req.body
  var newFriendName = newFriendData.name;
  var newFriendScore = newFriendData.scores;

  

  });
};
