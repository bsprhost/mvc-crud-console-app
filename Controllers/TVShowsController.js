
const yargs = require("yargs");

exports.updateTVShow = async (yargsObj) => {
    try{
        const TVShow = require("../Models/TVShowModel.js");
        let myquery = {title: yargsObj.title};
        let newvalues = {$set: {star: yargsObj.star}};

        return TVShow.updateOne(myquery, newvalues);
    }
    catch(error){
        console.log(error);
    }
};

exports.addTVShow = async (TVShowObj) => {
    try {
        const TVShow = require("../Models/TVShowModel.js");
        await TVShow.create(TVShowObj)
    } catch (error) {
        console.log(error);
    }
};

exports.deleteTVShow = async (TVShowObj) => {
    try {
        const TVShow = require("../Models/TVShowModel.js");
        await TVShow.deleteOne(TVShowObj)
    } catch (error) {
        console.log(error);
    }
};

exports.listTVShows = async () => {
    try {
        const TVShow = require("../Models/TVShowModel.js");
        return await TVShow.find({});
    }catch (error) {
        console.log(error);
    }
};