const mongoose = require('mongoose');

const albumSchema = mongoose.Schema({
    title: String, 
    releaseYear: Number,
    genre: String,
    artistId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }]
})

const album = mongoose.model("album", albumSchema)

module.exports= album