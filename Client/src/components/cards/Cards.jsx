import { useEffect } from "react";
import Card from "../card/Card";
import styles from "./Cards.module.css"

function Cards({ vgames, videogames, onClose }) {
  
  

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
          image={game.background_image}
          onClose = { onClose }
        />
      ))
    }
    </div>
  
}

export default Cards;