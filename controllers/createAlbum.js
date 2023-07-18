const albumJoi = require('../validators/albumJoi')
const album = require("../models/albumSchema")
const http = require('http-status-codes')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const nodemailer = require('nodemailer')

const createAlbum = async (req, res)=>{
    res.cookie("newUser", true)
    const {error, value} = albumJoi.validate(req.body)
    if(error) return res.status(http.StatusCodes.BAD_REQUEST).send("invalid requirement")
    try {
        const transporter = nodemailer.createTransport({
            service: gmail,
            auth:{
                user: "yungestbee@gmail.com",
                pass: process.env.gmailPassword
            }
        })

        transporter.sendMail({
            from: "yungestbee@gmail.com",
            to: artisteMail,
            subject: "Album creation Successfull",
            text: "Thank you for choosing us, I do hope you have a nice time on our platform"
        }, (error, info)=>{
            if (error) console.log(error)
            else console.log(info.messageId)
        })

        const cartiste = await album.create({
            title: value.title,
            releaseYear: value.releaseYear,
            genre: value.genre,
            artistId: value.artistId
        })
        res.status(http.StatusCodes.CREATED).send(cartiste)
    } catch (error) {
        console.error(error)
        return res.status(http.StatusCodes.BAD_REQUEST).send("couldn't create album, please try again later")
    }
}

module.exports=createAlbum