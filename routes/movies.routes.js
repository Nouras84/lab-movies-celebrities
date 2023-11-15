// const router = require("express").Router();
// const Movie = require("../models/Movie.model"); // Adjust the path as necessary
// const Celebrity = require("../models/Celebrity.model");

// // Route to display the list of movies
// router.get("/", (req, res, next) => {
//   res.send("Movies list will be displayed here");
// });

// // GET route to display the form to create a new movie
// router.get("/create", (req, res, next) => {
//   Celebrity.find()
//     .then((celebrities) => res.render("movies/new-movie", { celebrities }))
//     .catch((error) => next(error));
// });

// router.get("/", (req, res, next) => {
//   Movie.find()
//     .then((movies) => res.render("movies/movies", { movies }))
//     .catch((error) => next(error));
// });

// // Other imports and routes...
// //////
// // GET route to display a specific movie's details
// router.get("/:id", (req, res, next) => {
//   Movie.findById(req.params.id)
//     .populate("cast") // Populating cast details
//     .then((movie) => res.render("movies/movie-details", { movie }))
//     .catch((error) => next(error));
// });

// //////

// // POST route to handle the submission of the new movie form
// router.post("/create", (req, res, next) => {
//   // Extract movie data from req.body
//   const { title, genre, plot, cast } = req.body;

//   // Create a new movie with the extracted data
//   Movie.create({ title, genre, plot, cast })
//     .then(() => res.redirect("/movies")) // Redirect to the list of movies after creation
//     .catch((error) => next(error));
// });

// router.post("/create", (req, res, next) => {
//   Movie.create(req.body)
//     .then(() => res.redirect("/movies")) // Redirect to the list of movies
//     .catch((error) => next(error));
// });

// module.exports = router;

const router = require("express").Router();
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

// Route to display the list of movies
router.get("/", (req, res, next) => {
  Movie.find()
    .then((movies) => res.render("movies/movies", { movies }))
    .catch((error) => next(error));
});

// GET route to display the form to create a new movie
router.get("/create", (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => res.render("movies/new-movie", { celebrities }))
    .catch((error) => next(error));
});

// GET route to display a specific movie's details
router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .populate("cast")
    .then((movie) => res.render("movies/movie-details", { movie }))
    .catch((error) => next(error));
});

// POST route to handle the submission of the new movie form
router.post("/create", (req, res, next) => {
  Movie.create(req.body)
    .then(() => res.redirect("/movies"))
    .catch((error) => next(error));
});

module.exports = router;
