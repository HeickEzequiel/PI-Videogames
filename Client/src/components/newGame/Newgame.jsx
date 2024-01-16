import { useState } from "react"
import validation from "../../utils/validation"
import { useNavigate } from "react-router-dom"

function Newgame (props) {

const navigate = useNavigate()

    const [game, setGame] = useState({
        name: "", 
        description: "", 
        platforms: "", 
        background_image: "", 
        released: "", 
        rating: "" 
    })
 

    const handleChange = (event) => {
        const {name, value} = event.target
        setGame({...game, [name]: value})
       
      }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await fetch('http://localhost:3001/newgame', {
            method: 'POST',headers: {
              'Content-Type': 'application/json',
                },
                body: JSON.stringify(game),
          });
          if (response.ok) {
            alert('Nuevo juego creado con éxito');
            navigate("/")
    
          } else {
            alert('Error al guardar nuevo juego:', response.statusText);
          }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
          }
      };


    return(
        <div>
          <form onSubmit={handleSubmit} >
            <label style={{color: "black"}}>Nombre: </label>
              <input type='text'
                   key="name"
                   name= "name"
                   value={game.name}
                   placeholder="Ingresar nombre"
                   onChange={handleChange}
              />
          
        <br />
            <label style={{color: "black"}}>Descripción: </label>
              <input type='text'
                   key="description"
                   name= "description"
                   value={game.description}
                   placeholder="Ingresar descripción"
                   onChange={handleChange}
              />
          
        <br />
            <label style={{color: "black"}}>Plataformas: </label>
              <input type='text'
                   key="platforms"
                   name= "platforms"
                   value={game.platforms}
                   placeholder="Ingresar plataformas"
                   onChange={handleChange}
              />
          
        <br />
            <label style={{color: "black"}}>Imagen: </label>
              <input type='text'
                    key="background_image"
                    name= "background_image"
                    value={game.background_image}
                    placeholder="Ingresar link la imagen"
                    onChange={handleChange}
              />
          
        <br />
        <label style={{color: "black"}}>Fecha de lanzamiento: </label>
              <input type='date'
                    key="released"
                    name= "released"
                    value={game.released}
                    placeholder="Ingresar fecha de lanzamiento"
                    onChange={handleChange}
              />
         
        <br />            
        <label style={{color: "black"}}>Rating: </label>
              <input type='text'
                    key="rating"
                    name= "rating"
                    value={game.rating}
                    placeholder="Ingresar puntaje"
                    onChange={handleChange}
              />
          
        <br />
          <button type="submit" > Guardar Videojuego! </button>
            
          </form>
        </div>
      )
    
}
export default Newgame