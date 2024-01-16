import styles from "./Detail.module.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props){
    const {id} = useParams()
    const [game, setGame] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/videogame/${id}`).then(
            ({data}) => {
                if(data.name){
                    setGame(data);
                }else{
                    alert("No hay juegos con ese ID")
                }
            }
        );
        return setGame({});
    },[id]);
return(
    <div className = {styles.container}>
        <h1> {game.name} </h1>

        <img  
            src = {game.background_image} 
            alt = {game.name}
             />
        <h3>Plataformas: {game.platforms}</h3>
        <h3>Descripción: {game.description}</h3>
        <h3>Fecha de lanzamiento: {game.released}</h3>
        <h3>Rating: {game.rating}</h3>
        <h3>Generos: {game.genres}</h3>
    </div>
    )
}
export default Detail