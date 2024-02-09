import { useEffect, useState } from "react";
import Card from "../card/Card";
import styles from "./Cards.module.css"
import Pag from "../Pag/Pag.jsx"

function Cards({ vgames, videogames }) {
    
  const [cant, setCant] = useState(8)
  const [currentPage, setCurrentPage] = useState(1)
  
  const indexEnd = currentPage * cant;
  const indexIni = indexEnd - cant;
  //useEffect(()=>{videogames()},[])
  
  const vgames5 = vgames.slice(indexIni, indexEnd)
  const pages = Math.ceil(vgames.length / cant)
 console.log(vgames5)
  return <div className={styles.container} >
    {
      !vgames5.length 
        ? <h2>No existen videojuegos</h2>
        : vgames5.map((game, key) => (
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
    <Pag 
      setCurrentPage = {setCurrentPage}
      currentPage = {currentPage}
      pages = {pages} 
      />
  </div>
}
export default Cards;
  
