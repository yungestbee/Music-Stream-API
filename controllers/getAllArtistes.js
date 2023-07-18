const artiste = require("../models/artisteSchema")
const http = require('http-status-codes')

const getAllArtistes = async (req, res)=>{
    try {
        const allArtistes = await artiste.find({})
        if(!allArtistes) return res.status(http.StatusCodes.BAD_REQUEST).send("unable to fetch artistes")
        res.status(http.StatusCodes.OK).send(allArtistes)
    } catch (error) {
        console.error(error)
        res.status(http.StatusCodes.BAD_REQUEST).send("unable to fetch artistes")
    }
}


module.exports=getAllArtistes