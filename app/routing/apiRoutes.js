var friendsArray = require("../data/friends.js");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    return res.json(friendsArray);
  });


  app.post("/api/friends", function (req, res) {
    var friendMatch = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };
    var newFriend = req.body;
    for (var i = 0; i < friendsArray.length; i++) {
      var thisFriend = friendsArray[i];
      var thisDiff = 0;
      for (var j = 0; j < thisFriend.scores.length; j++) {
        var newScore = newFriend.scores[j];
        var friendScore = thisFriend.scores[j];

        thisDiff += Math.abs(newScore - friendScore);
      }
      if (thisDiff < friendMatch.friendDifference) {
        friendMatch.name = thisFriend.name
        friendMatch.photo = thisFriend.photo
        friendMatch.friendDifference = thisDiff
      }
    }

    friendsArray.push(newFriend);

    res.json(friendMatch)
  })

};
