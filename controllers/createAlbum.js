const albumJoi = require('../validators/albumJoi')
const album = require("../models/albumSchema")
const http = require('http-status-codes')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const createAlbum = async (req, res)=>{
    res.cookie("newUser", true)
    const {error, value} = albumJoi.validate(req.body)
    if(error) return res.status(http.StatusCodes.BAD_REQUEST).send("invalid requirement")
    try {
        const cartiste = await album.create({
            title: value.title,
            releaseYear: value.releaseYear,
            genre: value.genre,
            artistId: value.artistId,
        })
        res.status(http.StatusCodes.CREATED).send(cartiste)
    } catch (error) {
        console.error(error)
        return res.status(http.StatusCodes.BAD_REQUEST).send("couldn't create album, please try again later")
    }
}

module.exports=createAlbum