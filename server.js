const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// set up logger
app.use(logger('dev'));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

//set up routes
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


//set up promises with Mongoose
mongoose.Promise=global.Promise;
// connect to Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/NyReactNews",
    {
        useMongoClient:true
    }
)

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
