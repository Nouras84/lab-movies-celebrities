const mongoose = require("mongoose");
const { Schema } = mongoose;

// Create the Movie schema
const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  genre: String,
  plot: String,
  cast: [
    {
      type: Schema.Types.ObjectId,
      ref: "Celebrity",
    },
  ],
});

// Create the Movie model
const Movie = mongoose.model("Movie", movieSchema);

// Export the Movie model
module.exports = Movie;
