require('dotenv').config();
const axios = require("axios")
const URL = `https://api.rawg.io/api/genres` 
const { API_KEY } = process.env;
const { Genero } = require('../db');


const getGenres = async (req, res) => {
    
    try {
        const genresDB = await Genero.findAll();
        if(genresDB.length === 0){
            const {data} = await axios.get(`${URL}?key=${API_KEY}`);
            const videogames = data.results;
            const games = videogames.map(
                ({id, name, games_count, image_background}) => 
                ({id, name, games_count, image_background})
                )
            await Genero.bulkCreate(games);
        }
        const genres = await Genero.findAll();

        return genres.length > 0 ? res.json(genres) : res.status(404).send ("Not Found")
    } catch (error) {
        console.error("Error al obetener o guardar generos". error);
        res.status(500).send(error.message);
    }
};



        
module.exports = getGenres;