require('dotenv').config();
const axios = require("axios")
const URL = `https://api.rawg.io/api/games`
const { API_KEY }  = process.env

const getVideogameById = async(req, res) => {

    try{
        const gameId = req.params.id
        const {data} = await axios.get(`${URL}/${gameId}?key=${API_KEY}`)
        const {id, name, description, platforms, background_image, released, rating} = data
        const game = 
            {id, name, description, platforms, background_image, released, rating}
        return game.name ? res.json(game) : res.status(404).send ("Not Found")
    }
    catch (error) {
        return res.status(500).send(error.message)
    }

}
module.exports = getVideogameById