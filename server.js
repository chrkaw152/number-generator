// require express so that you can use it
const express = require("express");

//instantiate express
const app = express();

//for serving files in the public folder, such as CSS files
app.use(express.static("./public"));

//listens on port 3000 (starts it up)
app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});

//server responds when the client sends a GET request for the / endpoint
app.get("/", function(req,res) {
    res.sendFile(__dirname + "/public/index.html"); //sends html file to user
});
