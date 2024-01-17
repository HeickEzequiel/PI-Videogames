import Newgame from "../newGame/Newgame.jsx";
import Searchbar from "../searchbar/Searchbar.jsx"
import { Link } from "react-router-dom";
import styles from "./Nav.module.css"


 function Nav(props) {
    return (
       <div className={styles.body}>
         <Searchbar onSearch = {props.onSearch}/>
         <button className={styles.button}><Link to= '/home'>Home</Link> </button>
         <button className={styles.button}><Link to= '/newgame'>Añadir juego</Link></button>
         <button className={styles.button}><Link to= '/favorites'>Favoritos</Link></button>
         <button className={styles.logout} onClick={props.logout} >Desconectarse ❌</button>
       
       </div>
    );
 }
 export default Nav