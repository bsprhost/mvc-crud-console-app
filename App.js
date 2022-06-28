const mongoose = require("mongoose");
const yargs = require("yargs");

const { Connection } = require("./DbConnections/MongolDbConn");
const { addMovie, listMovies, deleteMovie, updateMovie } = require("./Controllers/MoviesController");
const { addTVShow, listTVShows, deleteTVShow, updateTVShow } = require("./Controllers/TVShowsController");

const app = async (yargsObj) => {
    try {
        switch (yargsObj._[0]) {
            case "AddMovie":
                await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
                break;

            case "UpdateMovie":
                await updateMovie(yargsObj);
                break;

            case "DeleteMovie":
                await deleteMovie({ title: yargsObj.title });
                break;

            case "AddTVShow":
                await addTVShow({ title: yargsObj.title, star: yargsObj.star });
                break;

            case "UpdateTVShow":
                await updateTVShow(yargsObj);
                break;

            case "DeleteTVShow":
                await deleteTVShow({ title: yargsObj.title });
                break;

            default:
                console.log("Command Unknown");

        }
        console.log(await listMovies());
        console.log(await listTVShows());
        await mongoose.disconnect();
    }catch (error) {
        console.log(error);
    }
};

Connection();
app(yargs.argv);
