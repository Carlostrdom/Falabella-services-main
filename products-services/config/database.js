import mongoose from "mongoose";

let url = process.env.URI_MONGO;
console.log(url);

async function conectiondatabase() {
    try {
        mongoose.connect(process.env.URI_MONGO)
        console.log("Database connected");

    } catch (e) {
        console.log(e);
    }
}
conectiondatabase()