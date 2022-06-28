
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String, 
        unique: true, 
        required: true,
    },
    actor: {
        type: String,
    },
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;