
const yargs = require("yargs");

exports.updateMovie = async (yargsObj) => {
    try{
        const Movie = require("../Models/MovieModel.js");
        let myquery = {title: yargsObj.title};
        let newvalues = {$set: {actor: yargsObj.actor}};

        return Movie.updateOne(myquery, newvalues);
    }
    catch(error){
        console.log(error);
    }
};

exports.addMovie = async (movieObj) => {
    try {
        const Movie = require("../Models/MovieModel.js");
        await Movie.create(movieObj)
    } catch (error) {
        console.log(error);
    }
};

exports.deleteMovie = async (movieObj) => {
    try {
        const Movie = require("../Models/MovieModel.js");
        await Movie.deleteOne(movieObj)
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async () => {
    try {
        const Movie = require("../Models/MovieModel.js");
        return await Movie.find({});
    }catch (error) {
        console.log(error);
    }
};

