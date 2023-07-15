const album = require("../models/albumSchema")
const http = require('http-status-codes')

const getAlbum = async (req, res)=>{
    console.log(req.params.id)
    const id = req.params.id
    try {
        const singleAlbum = await album.findById(id)
        console.log(singleAlbum)
        if(!singleAlbum) return res.status(http.StatusCodes.BAD_REQUEST).send("unable to find specific Album")
        console.log(singleAlbum)
        res.status(http.StatusCodes.OK).send(singleAlbum)
    } catch (error) {
        console.log(error)
        res.status(http.StatusCodes.BAD_REQUEST).send("unable to find specific Album")
    }
}


module.exports=getAlbum