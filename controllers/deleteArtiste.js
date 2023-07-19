const artiste = require("../models/artisteSchema")
const http = require('http-status-codes')

const deleteArtiste = async (req, res)=>{
    const id = req.params.id;
    if(id === "" || null) return res.status(http.StatusCodes.BAD_REQUEST).send("invalid Artiste ID")
    try {
        const del = await artiste.findByIdAndDelete(id)
        res.status(http.StatusCodes.OK).send("Artiste Successfully deleted")
    } catch (error) {
        console.error(error)
        res.status(http.StatusCodes.BAD_REQUEST).send("invalid Artiste ID")
    }
}


module.exports=deleteArtiste