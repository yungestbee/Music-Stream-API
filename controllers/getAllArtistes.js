const artiste = require("../models/artisteSchema")
const http = require('http-status-codes')

const getAllArtistes = async (req, res)=>{
    try {
        const allArtistes = await artiste.find({})
        if(!allArtistes) return res.status(400).send("unable to fetch artistes")
        res.status(200).send(allArtistes)

        // const singleArtiste = await artiste.aggregate([
        //     { $lookup:
        //         {
        //            from: "albums",
        //            localField: "name",
        //            foreignField: "artisteId",
        //            as: "albums"
        //         }
        //     }
        // ])
        res.status(http.StatusCodes.OK).send(singleArtiste)
    } catch (error) {
        console.error(error)
        res.status(http.StatusCodes.BAD_REQUEST).send("unable to fetch artistes")
    }
}


module.exports=getAllArtistes