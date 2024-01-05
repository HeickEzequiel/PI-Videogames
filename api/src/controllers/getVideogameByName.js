require('dotenv').config();
const axios = require("axios")
const URL = `https://api.rawg.io/api/games`  // https://api.rawg.io/api/games?search={game}
const { API_KEY } = process.env;
const { Op } = require("sequelize");
const { Videogame } = require("../db")
 
const getVideogameByName = async(req, res) => {

    try{
        const { name } = req.query
        const gameDB =  await Videogame.findAll({
            where: {
                name:{
                    [Op.iLike]: `%${name}%`
                }
            }, limit:15
        })
        
        const {data} = await axios.get(`${URL}?search=${name}&key=${API_KEY}`)
        const videogames = data.results.slice(0, 15)
        const combinedGames = [...gameDB, ...videogames].map(
            ({id, name, platforms: platforms, background_image, released, rating}) => 
            ({id, name, platforms: platforms, background_image, released, rating})
            )
     return combinedGames.length > 0 ? res.json(combinedGames) : res.status(404).send (`No se encontraron videojuegos con el nombre "${name}".`)
        
    }
    catch (error) {
        console.error("Error al buscar videojuegos por nombre:", error);
        return res.status(500).send(error.message)
    }

}
module.exports = getVideogameByName