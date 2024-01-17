import { useEffect } from "react";
import Card from "../card/Card";
import styles from "./Cards.module.css"

function Cards({ vgames, videogames }) {
  
  

  useEffect(()=>{videogames()},[])
 
  console.log(vgames)
  
    return <div className={styles.container} >
      {
        !vgames.length ? <h2>No existen videojuegos</h2>
        :
        vgames.map((game, key) => (
        <Card
          key={key}
          id={game.id}
          name={game.name}
          background_image={game.background_image}
          released={game.released}
          rating={game.rating}       
        />
      ))
    }
    </div>
  
}

export default Cards;