// // ℹ️ Gets access to environment variables/settings
// // https://www.npmjs.com/package/dotenv
// require('dotenv/config');

// // ℹ️ Connects to the database
// require('./db');

// // Handles http requests (express is node js framework)
// // https://www.npmjs.com/package/express
// const express = require('express');

// // Handles the handlebars
// // https://www.npmjs.com/package/hbs
// const hbs = require('hbs');

// const app = express();

// // ℹ️ This function is getting exported from the config folder. It runs most middlewares
// require('./config')(app);

// // default value for title local
// const projectName = 'lab-movies-celebrities';
// const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

// app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

// // 👇 Start handling routes here
// const index = require('./routes/index');
// app.use('/', index);

// // ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
// require('./error-handling')(app);

// module.exports = app;

// Gets access to environment variables/settings
require("dotenv/config");

// Connects to the database
require("./db");

// Handles http requests (express is node js framework)
const express = require("express");

// Handles the handlebars
const hbs = require("hbs");

const app = express();

// This function is getting exported from the config folder. It runs most middlewares
require("./config")(app);

// Default value for title local
const projectName = "lab-movies-celebrities";
const capitalized = (string) =>
  string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)} - Generated with Ironlauncher`;

// Start handling routes here
const index = require("./routes/index");
app.use("/", index);

// Import celebrities and movies routes
const celebritiesRoutes = require("./routes/celebrities.routes");
const moviesRoutes = require("./routes/movies.routes");

// Use routes
app.use("/celebrities", celebritiesRoutes);
app.use("/movies", moviesRoutes);

// To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
