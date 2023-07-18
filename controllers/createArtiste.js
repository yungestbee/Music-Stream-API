const artisteJoi = require('../validators/artisteJoi')
const artiste = require("../models/artisteSchema")
const http = require('http-status-codes')
const multer  = require('multer')
const nodeMailer = require('nodemailer')



const createArtiste = async (req, res)=>{
    
    const {error, value} = artisteJoi.validate(req.body)
    console.log(value.genre)
    console.log(value.name)
    if(error) return res.status(http.StatusCodes.BAD_REQUEST).send("invalid requirement")
    try {
        console.log(req.file.path)
        const cartiste = await artiste.create({
            name: value.name,
            genre: value.genre,
            imageURL: req.file.path
        })
        console.log(cartiste)
        res.status(http.StatusCodes.CREATED).send(cartiste)
    } catch (error) {
        // console.error(error)
        console.error(error.message)
        return res.status(http.StatusCodes.BAD_REQUEST).send("couldn't create profile, please try again later")
    }
}

module.exports=createArtiste