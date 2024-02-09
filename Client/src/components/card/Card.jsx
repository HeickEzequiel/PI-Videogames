import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';

function Card(props) {
   
   const dispatch = useDispatch()
   const [isFav, setIsFav] = useState(false)
   const myFavorites = useSelector(state => state.myFavorites)
    
   useEffect(() => {
      const isFavorite = myFavorites.some(fav => fav.id === props.id)
      setIsFav(isFavorite)
   },[myFavorites, props.id])

   
   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false)
         dispatch(removeFav(props.id))
      }else{
         setIsFav(true)
         dispatch(addFav(props))
      }
   }

   return (
      <div className={styles.container}>
         <button className = {styles.button} onClick = {handleFavorite}>
            {isFav ? "❤️":"🤍"}
         </button>
         
         <Link to={`/videogame/${props.id}`}>
            <img className={styles.container.img}
               src={props.background_image} 
               alt={props.name}/>
         </Link>
         
         <h1>{props.name}</h1>
         {/* <h2>Numero de ID:{props.id}</h2> */}
      </div>
   )
}
export default Card