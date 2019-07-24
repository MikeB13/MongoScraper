// Setting up Dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require("express-handlebars");
var mongoose = require("mongoose");


var config = require("./config").init();
var routes = require("./controller/routes.js");
let port = require("./config").port;

// Configure each
var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

mongoose.Promise;
// mlab
// var db = mongoose.connection(config.db.uri, {useMongoClient: true}));
// local host
// mongoose.connect("mongodb://localhost/newscraper", { useMongoClient: true });

// .env for mlab db
mongoose.connect(config.db.MONGODB_URI || "mongodb://localhost/mongoScraper", { useMongoClient: true });

var db = mongoose.connection;

// Log errors
db.on("error", error => console.log("Mongoose Error", error));

// log connection
db.once("open", () => console.log("Mongoose connection successful"));

// Controller route
app.use("/", routes);

// Port
app.listen(port, () => console.log("app running on port" + port));