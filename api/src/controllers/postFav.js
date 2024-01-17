const { Favorite } = require("../db");

const postFav = async ( req, res ) => {
    try{
        const { id, name, background_image, released, rating, } = req.body; 
        if( id && name && background_image && released && rating ){
            await Favorite.findOrCreate({
                where: {
                    id,
                    name, 
                    background_image, 
                    released, 
                    rating 
                }
            })
            const allFavs = await Favorite.findAll()
            return res.status(200).json(allFavs)
        }
        return res.status(401).send("Faltan Datos")
    } 
    catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = postFav