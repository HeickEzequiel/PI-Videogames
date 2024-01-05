const { User } = require("../db.js");

const postUser = async (req, res) => {
    try{
    const { email, password } = req.body;
    if(email && password){
        const newUser = await User.findOrCreate({
            where: { email, password }
        })
        res.json(newUser)
    }
    return res.status(400).send("Datos incorrectos")
    }catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = postUser;