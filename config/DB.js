import mongoose from "mongoose";

export const connect = async() => {
    try {
        await mongoose.connect("mongodb+srv://" + 
        process.env.DB_USER_PASS +
        "@cluster0.iodcc.mongodb.net/CrudNext")
        console.log("bien connecté")
    } catch (err) {
        console.log(err)
    }
}

