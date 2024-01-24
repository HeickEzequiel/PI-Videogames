import Card from "../card/Card"
import styles from "./Search.module.css"

function Search ({games}){
console.log(games)
    return <div className={styles.container} >
    {
      !games.length ? <h2>No existen videojuegos</h2>
      :
      games.map((game, key) => (
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

export default Search