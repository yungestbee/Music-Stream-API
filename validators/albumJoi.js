const joi = require('joi');

const albumJoi = joi.object({
    title: joi.string().required(), 
    genre: joi.string().required(),
    releaseYear: joi.number().required(),
    // artistId: joi.string().required()
})

module.exports = albumJoi
