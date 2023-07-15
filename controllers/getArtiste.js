const artiste = require("../models/artisteSchema")
const album = require('../models/albumSchema')
const http = require('http-status-codes')

const getArtiste = async (req, res)=>{
    const id = req.params.id
    try {
        const singleArtiste = await artiste.findById(id)
        if(!singleArtiste) return res.status(http.StatusCodes.BAD_REQUEST).send("unable to find specific artiste")
        const assAlbum = await album.find({artistId:singleArtiste.name})
        const display = {artiste: singleArtiste, album: assAlbum}
        console.log(display)
        res.status(200).send(display)
        // const singleArtiste = await artiste.aggregate([
        //     { $lookup:
        //         {
        //            from: "album",
        //            localField: "name",
        //            foreignField: "artisteId",
        //            as: "albums"
        //         }
        //     }
        // ])
        // res.status(200).send(singleArtiste)
    } catch (error) {
        console.log(error)
        res.status(http.StatusCodes.BAD_REQUEST).send("unable to find specific artiste")
    }
}


module.exports=getArtiste