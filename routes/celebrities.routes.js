// const router = require("express").Router();
// const Celebrity = require("../models/Celebrity.model");

// // Route to display the list of celebrities
// router.get("/", (req, res, next) => {
//   res.send("Celebrities list will be displayed here");
// });

// // Route to add a new celebrity (usually a form to submit new celebrity data)
// router.get("/add", (req, res, next) => {
//   res.send("Form to add a new celebrity");
// });

// // Route to display the form for adding a new celebrity
// router.get("/create", (req, res, next) => {
//   res.render("celebrities/new-celebrity"); // Assuming you have a view named new-celebrity.hbs
// });

// router.post("/create", (req, res, next) => {
//   const { name, occupation, catchPhrase } = req.body;

//   Celebrity.create({ name, occupation, catchPhrase })
//     .then(() => res.redirect("/celebrities")) // Redirect after successful creation
//     .catch((error) => next(error));
// });

// router.post("/create", (req, res, next) => {
//   Celebrity.create(req.body)
//     .then(() => res.redirect("/celebrities")) // Redirect to the list of celebrities
//     .catch((error) => res.render("celebrities/new-celebrity", { error }));
// });

// // POST route to handle the submission of the new celebrity form
// router.post("/add", (req, res, next) => {
//   res.send("Handle adding a new celebrity");
// });
// router.get("/", (req, res, next) => {
//   res.render("celebrities/celebrities", {
//     /* data */
//   });
// });

// router.get("/", (req, res, next) => {
//   Celebrity.find()
//     .then((celebrities) =>
//       res.render("celebrities/celebrities", { celebrities })
//     )
//     .catch((error) => next(error)); // Error handling
// });

// module.exports = router;

const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// Route to display the list of celebrities
router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((celebrities) =>
      res.render("celebrities/celebrities", { celebrities })
    )
    .catch((error) => next(error));
});

// Route to display the form for adding a new celebrity
router.get("/create", (req, res, next) => {
  res.render("celebrities/new-celebrity"); // Assuming you have a view named new-celebrity.hbs
});

// POST route to handle the submission of the new celebrity form
router.post("/create", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => res.redirect("/celebrities")) // Redirect after successful creation
    .catch((error) => res.render("celebrities/new-celebrity", { error }));
});

module.exports = router;
