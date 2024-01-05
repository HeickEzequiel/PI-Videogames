const { Favorite } = require("../db");

const postFav = async ( req, res ) => {
    try{
    const { nombre, descripcion, plataforma, imagen, fechaDeLanzamiento, rating } = req.body; 
    if( nombre && descripcion && plataforma && imagen && fechaDeLanzamiento && rating){
        await Favorite.findOrCreate({
            where: req.body
        })
        const allFavs = await Favorite.findAll()
        return res.status(200).json(allFavs)
    }
    return res.status(401).send("Faltan Datos")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = postFav