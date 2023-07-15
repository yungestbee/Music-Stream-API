const album = require("../models/albumSchema")
const http = require('http-status-codes')

const getAllAlbums = async (req, res)=>{
    try {
        const allAlbums = await album.find({})
        if(!allAlbums) return res.status(http.StatusCodes.BAD_REQUEST).send("unable to fetch albums")
        res.status(http.StatusCodes.OK).send(allAlbums)
    } catch (error) {
        console.error(error)
        res.status(http.StatusCodes.BAD_REQUEST).send("unable to fetch albums")
    }
}


module.exports=getAllAlbums