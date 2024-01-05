const router = require('express').Router();

const deleteFav = require('../controllers/deleteFav.js');
const getVideogameById = require ("../controllers/getVideogameById.js")
const getVideogameByName = require ( "../controllers/getVideogameByName.js");
const getVideogames = require('../controllers/getVideogames.js');
const getGenres = require ('../controllers/getGenres.js')
const login = require('../controllers/login.js');
const postFav = require('../controllers/postFav.js');
const postUser = require('../controllers/postUser.js');
const postVideogame = require('../controllers/postVideogame.js');



router.get("/videogame/:id", getVideogameById) // ok
router.get("/videogame", getVideogameByName) // ok
router.get("/genres", getGenres) // ok
router.get("/home", getVideogames) //ok
router.get("/login", login)
router.post("/login", postUser)
router.post("/videogame", postVideogame) //ok
router.post("/videogame/fav", postFav);
router.delete("/videogame/fav/:id", deleteFav)


module.exports = router;
