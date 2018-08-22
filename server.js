const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const routes = require("./routes");
const app=express();


// configure body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// set up logger
app.use(logger('dev'));

//serve up static assets
app.use(express.static(path.join(__dirname,"client/build")));

//set up routes
app.use(routes);


//set up promises with Mongoose
mongoose.Promise=global.Promise;
// connect to Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/NyReactNews",
    {
        useMongoClient:true
    }
)

//start the API server
const PORT = process.env.PORT || 3001;
app.listen(PORT,function() {
    console.log("API server listen on port ",PORT);
})