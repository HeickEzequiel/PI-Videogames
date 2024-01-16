import Newgame from "../newGame/Newgame.jsx";
import Searchbar from "../searchbar/Searchbar.jsx"
import { Link } from "react-router-dom";


 function Nav(props) {
    return (
       <div>
         <Searchbar onSearch = {props.onSearch}/>
         <button><Link to= '/home'>Home</Link> </button>
         <button><Link to= '/newgame'>Añadir juego</Link></button>
         <button><Link to= '/favorites'>Favoritos</Link></button>
         <button onClick={props.logout} >Logout ❌</button>
       
       </div>
    );
 }
 export default Nav