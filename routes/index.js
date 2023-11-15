// const router = require("express").Router();

// /* GET home page */
// router.get("/", (req, res, next) => {
//   res.render("index");
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

// Import routes
const celebritiesRouter = require("./celebrities.routes");
const moviesRouter = require("./movies.routes");

// Use routes
router.use("/celebrities", celebritiesRouter);
router.use("/movies", moviesRouter);

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
