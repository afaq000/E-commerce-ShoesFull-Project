// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
let mongoose = require('mongoose')
let dotenv = require('dotenv');
dotenv.config();

const connectdb = async () => {
    try {
       
        const url = "mongodb+srv://afaqhussain098:QJYnpV0XD2O7BBdf@cluster0.e4fwdfk.mongodb.net/?retryWrites=true&w=majority";

        if (!url) {
            console.error("MongoDB connection URL is not defined in the .env file.");
            return;
        }
// QJYnpV0XD2O7BBdf
        // await mongoose.connect("mongodb://alikhaninfo125:shoes123@ac-k8y9xb8-shard-00-00.nbkwprx.mongodb.net:27017,ac-k8y9xb8-shard-00-01.nbkwprx.mongodb.net:27017,ac-k8y9xb8-shard-00-02.nbkwprx.mongodb.net:27017/?ssl=true&replicaSet=atlas-emu9pf-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0",{
            await mongoose.connect("mongodb+srv://afaqhussain098:QJYnpV0XD2O7BBdf@cluster0.e4fwdfk.mongodb.net/?retryWrites=true&w=majority",{
            dbName:"ShoesStore"
        });
    
        console.log("Connected to MongoDB");
        console.log(process.env.PORT);

    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`);
    }
};

module.exports =  connectdb ;
