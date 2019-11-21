var friendsArray = require("../data/friends.js") //???? 


module.exports = function(app) {
app.get("/api/friends", function(req, res) {
    return res.json(friendArray);
  });


app.post("/api/friends", function(req, res) {
    //var newFriend = req.body; 
    console.log(newFriend);
    friendsArray.push(newFriend);
    res.json(newFriend);
  });




}