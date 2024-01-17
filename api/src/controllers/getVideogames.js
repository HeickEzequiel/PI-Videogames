require('dotenv').config();
const axios = require("axios")
const URL = `https://api.rawg.io/api/games`
const { API_KEY } = process.env;

const getVideogames = async (req, res) => {
    try {
        const { data } = await axios.get(`${URL}?key=${API_KEY}`);
        const videogames = data.results
        const games = videogames.map(
            ({id, name, platforms, background_image, released, rating}) => 
            ({id, name, platforms, background_image, released, rating})
        )
        return games.length > 0 ? res.json(games) : res.status(404).send ("Not Found")
       
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
        
module.exports = getVideogames;


