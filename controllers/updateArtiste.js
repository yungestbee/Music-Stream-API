const http = require('http-status-codes')
const artiste = require("../models/artisteSchema")


const updateArtiste = async (req, res)=>{
    const id = req.params.id;
    const check = req.body
    if(id === "" || null) return res.status(http.StatusCodes.BAD_REQUEST).send("invalid Artiste ID")
    try {
        console.log(check)
        const del = await artiste.findByIdAndUpdate(id, {$set:check})
        res.status(http.StatusCodes.OK).send(del)
    } catch (error) {
        console.error(error)
        res.status(http.StatusCodes.BAD_REQUEST).send("error updating Artiste")
    }
}


module.exports=updateArtiste