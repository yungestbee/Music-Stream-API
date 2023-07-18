const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    title: String, 
    releaseYear: Number,
    genre: String,
    artistId: { type: mongoose.Schema.Types.ObjectId, ref: 'artiste' }
})

const album = mongoose.model("album", albumSchema)

module.exports= album