const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    title: String, 
    releaseYear: Number,
    genre: String,
    artistId:String
})

const album = mongoose.model("album", albumSchema)

module.exports= album