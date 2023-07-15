const album = require("../models/albumSchema")
const http = require('http-status-codes')

const deleteAlbum = async (req, res)=>{
    const id = req.params.id;
    if(id === "" || null) return res.status(http.StatusCodes.BAD_REQUEST).send("invalid Album ID")
    try {
        const del = await album.findByIdAndDelete(id)
        res.status(http.StatusCodes.OK).send("Album Successfully deleted")
    } catch (error) {
        console.error(error)
        res.status(http.StatusCodes.BAD_REQUEST).send("invalid Album ID") 
    }
}

module.exports=deleteAlbum