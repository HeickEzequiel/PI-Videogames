require('dotenv').config();
const axios = require("axios");
const URL = `https://api.rawg.io/api/games`;
const { API_KEY }  = process.env;
const { Videogame, Genero } = require("../db");


const getVideogameById = async(req, res) => {

    try{
        const  dbId = req.params.id;
        const gameDB =  await Videogame.findOne({
            where: {id: dbId },
            
        });
        const gameId = req.params.id;
        const {data} = await axios.get(`${URL}/${gameId}?key=${API_KEY}`);
        const {id, name, description,
            platforms, background_image, released, rating, genres} = data;

        const PlatformsName = platforms.map(platforms => platforms.platform.name); 
        const GenresName = genres.map(genre => genre.name ); 
        const GenresId = genres.map(genre => genre.id);
        const generos = [...GenresName, ...GenresId]        
        const game = { 
                    id, 
                    name, 
                    description,
                    platforms: PlatformsName, 
                    background_image, 
                    released, 
                    rating, 
                    genres: generos };
    
        if(gameDB && game){
            return res.status(200).json({gameDB, game} )
        }else if(gameDB){
            return res.status(200).json(gameDB)
        }else if (game){
            return res.status(200).json(game)
        }else{
            res.status(404).send ("Not Found")
        }

    }
    catch (error) {
        return res.status(500).send(error.message);
    };

};
module.exports = getVideogameById;