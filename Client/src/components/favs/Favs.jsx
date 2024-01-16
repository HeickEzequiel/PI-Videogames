import {useDispatch, useSelector} from "react-redux"
import Card from "../card/Card.jsx"
import { filterCards, orderCards } from "../../redux/actions.js";
import styles from "./Favs.module.css"

function Favs({ onClose }) {

    const myFavorites = useSelector(state => state.myFavorites);
  
    const dispatch = useDispatch();
  
    const handleOrder = event => {
     dispatch(orderCards(event.target.value));
    }
    const handleFilter = event => {
     dispatch(filterCards(event.target.value));
    }

    return (
        <div >
           <div >
              
              <select name="order" onChange={handleOrder}>
                 <option value="A">Ascendente</option>
                 <option value="D">Descendente</option>
              </select>
              <select name="filter" onChange={handleFilter}>
                 <option value="All">All</option>
                 <option value="Name">Name</option>
                 <option value="platforms">Platforms</option>
                 <option value="Released">Released</option>
                 <option value="Rating">Rating</option>
              </select>
           </div>
              <br/>
           <div className={styles.container}
                       >
              {
                 !myFavorites.length
                 ? <h2>No hay favoritos</h2>
                 :
                 myFavorites.map((myFavorite, key) => (
                    <Card
                       key={key}
                       name={myFavorite.name}
                       platforms={myFavorite.platforms}
                       genres={myFavorite.genres}
                       background_image={myFavorite.background_image}
                       released={myFavorite.released}
                       rating={myFavorite.rating}
                       onClose={onClose}
                    />
                 ))
              }
           </div>
        </div>
     );
  }
  export default Favs