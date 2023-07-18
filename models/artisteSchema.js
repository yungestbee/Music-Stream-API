const mongoose = require('mongoose');

const artisteSchema = new mongoose.Schema({
    name: String, 
    genre: String,
    imageURL: String
})


const artiste = mongoose.model("artiste", artisteSchema)

module.exports= artiste