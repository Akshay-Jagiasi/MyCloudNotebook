const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/mycloudnotebook"

const connectToMongo = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURL, ()=>{
        console.log("Connected to mongo successfully");
    })
}

module.exports = connectToMongo