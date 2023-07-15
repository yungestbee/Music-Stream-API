const album = require("../models/albumSchema")
const http = require('http-status-codes')

const updateAlbum = async (req, res)=>{
    const id = req.params.id;
    const check = req.body
    if(id === "" || null) return res.status(http.StatusCodes.BAD_REQUEST).send("invalid Album ID")
    try {
        const del = await album.findByIdAndUpdate(id, {$set:{check}})
        res.status(http.StatusCodes.OK).send(del)
    } catch (error) {
        console.error(error)
        res.status(http.StatusCodes.BAD_REQUEST).send("invalid Album ID")
    }
}


module.exports=updateAlbum