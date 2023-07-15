const joi = require('joi');

const artisteJoi = joi.object({
    name: joi.string().required(), 
    genre: joi.string().required()
})

module.exports = artisteJoi