const mongoose = require("mongoose");
const yargs = require("yargs");

const { Connection } = require("./DbConnections/MongolDbConn");
const { addMovie, listMovies, deleteMovie, updateMovie } = require("./Controllers/MoviesController");

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

            default:
                console.log("Command Unknown");

        }
        console.log(await listMovies());
        await mongoose.disconnect();
    }catch (error) {
        console.log(error);
    }
};

Connection();
app(yargs.argv);
