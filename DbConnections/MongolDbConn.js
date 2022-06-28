const mongoose = require("mongoose");

require("dotenv").config();

exports.Connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Successful database Connection")
    } catch (error) {
        console.log(error);
    }
};

