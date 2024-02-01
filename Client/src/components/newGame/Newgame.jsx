import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Newgame.module.css"
import axios from "axios"

function Newgame (props) {

const navigate = useNavigate()

  const [game, setGame] = useState({
    id:"",
    name: "", 
    description:"", 
    platforms:"", 
    background_image:"", 
    released:"", 
    rating: 0
  })
  
  const handleChange = (event) => {
    const {name, value} = event.target
    setGame({...game, [name]: value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3001/newgame', game,{
          headers:{
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
      alert('Nuevo juego creado con éxito');
      navigate("/home");
      } else {
        alert('Error al guardar nuevo juego: ' + response.statusText);
        }
    }catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  return(
    <div>
      <form onSubmit={handleSubmit} >
        <label style={{color: "white"}}>Nombre: </label>
          <input 
            type='text'
            key="name"
            name= "name"
            value={game.name}
            placeholder="Ingresar nombre"
            onChange={handleChange}
          />
      <br/>
      <label style={{color: "white"}}>Descripción: </label>
        <input
          type='text'
          key="description"
          name= "description"
          value={game.description}
          placeholder="Ingresar descripción"
          onChange={handleChange}
        />
      <br/>
        <label style={{color: "white"}}>Plataformas: </label>
          <input
            type='text'
            key="platforms"
            name= "platforms"
            value={game.platforms}
            placeholder="Ingresar plataformas"
            onChange={handleChange}
          />
      <br/>
        <label style={{color: "white"}}>Imagen: </label>
          <input 
            type='url'
            key="background_image"
            name= "background_image"
            value={game.background_image}
            placeholder="Ingresar link la imagen"
            onChange={handleChange}
          />
      <br/>
        <label style={{color: "white"}}>Fecha de lanzamiento: </label>
          <input 
            type='date'
            key="released"
            name= "released"
            value={game.released}
            placeholder="Ingresar fecha de lanzamiento"
            onChange={handleChange}
          />
      <br />            
        <label style={{color: "white"}}>Rating: </label>
          <input 
            type='number'
            key="rating"
            name= "rating"
            value={game.rating}
            placeholder="Ingresar puntaje"
            onChange={handleChange}
          />
      <br/>
        <button 
          className={styles.button}
          type="submit" > Guardar Videojuego! </button>
            
      </form>
    </div>
  )
}
export default Newgame