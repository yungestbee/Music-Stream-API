const express = require('express')
const getAllArtistes = require('../controllers/getAllArtistes')
const getArtiste = require('../controllers/getArtiste')
const createArtiste = require('../controllers/createArtiste')
const updateArtiste = require('../controllers/updateArtiste')
const deleteArtiste = require('../controllers/deleteArtiste')
const getAllAlbums = require('../controllers/getAllAlbums')
const getAlbum = require('../controllers/getAlbum')
const createAlbum = require('../controllers/createAlbum')
const updateAlbum = require('../controllers/updateAlbum')
const deleteAlbum = require('../controllers/deleteAlbum')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const route = express.Router()

route.get("/api/artists", getAllArtistes)

route.get("/api/artists/:id", getArtiste )

route.post("/api/artists", upload.single('file'), createArtiste)

route.put(" /api/artists/:id", updateArtiste)

route.delete("/api/artists/:id", deleteArtiste)

route.get("/api/albums", getAllAlbums)

route.get("/api/albums/:id", getAlbum)

route.post("/api/albums", createAlbum)

route.put("/api/albums/:id", updateAlbum)

route.delete("/api/albums/:id", deleteAlbum)

module.exports= route