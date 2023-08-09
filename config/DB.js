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

//Problème très bizarre à résoudre
//Avec Next, il pointe un bad auth, alors qu'en MERN, tout fonctionne
//Ce avec un système de connexion BDD identique !