const { Videogame } = require("../db.js");

const postVideogame = async (req, res) => {
    try{
        const { 
            id,
            name, 
            description, 
            platforms, 
            background_image, 
            released, 
            rating 
        } = req.body;

        
        if(name && description && platforms && background_image && released && rating){
            const newGame = await Videogame.findOrCreate({
                where: {
                    id,
                    name, 
                    description, 
                    platforms, 
                    background_image, 
                    released, 
                    rating 
                }
                })
            return res.status(200).json(newGame)
        }
        return res.status(400).send("Datos incorrectos")
    }catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = postVideogame;