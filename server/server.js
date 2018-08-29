const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add routes, both API and view
app.use(routes);

// Serve up static assets in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });