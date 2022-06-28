const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TVShowSchema = new Schema({
    title: {
        type: String, 
        unique: true, 
        required: true,
    },
    star: {
        type: String,
    },
});

const TVShow = mongoose.model("TVShow", TVShowSchema);
module.exports = TVShow;