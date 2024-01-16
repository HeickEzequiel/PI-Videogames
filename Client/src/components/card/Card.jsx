import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';

function Card(props) {

    const dispatch = useDispatch()
    const [isFav, setIsFav] = useState(false)
    
    const handleFavorite = () =>{
       if(isFav){
          setIsFav(false)
          dispatch(removeFav(props.id))
       }else{
          setIsFav(true)
          dispatch(addFav(props))
       }
    }
    
    
    const myFavorites = useSelector(state => state.myFavorites)
    
    useEffect(() => {
       myFavorites.forEach((fav) => {
          if (fav.id === props.id) {
             setIsFav(true);
          }
       });
    }, [myFavorites]);

    return (
        <div className={styles.container}>
            {
                isFav 
                ? (<button onClick={handleFavorite}>❤️</button>) 
                : (<button onClick={handleFavorite}>🤍</button>)
            }
            
            
            <Link to={`/videogame/${props.id}`}>
            <img className={styles.container.img}
                 src={props.image} 
                 alt={props.name}/>
            <h1>{props.name}</h1>
            </Link>
        </div>
            )
            
         
}
export default Card