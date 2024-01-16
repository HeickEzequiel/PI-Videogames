import { Link } from 'react-router-dom'
import styles from './Card.module.css'

function Card(props) {



    return (
        <div className={styles.container}>
            <Link to={`/videogame/${props.id}`}>
            <img className={styles.container.img}
                 src={props.image} 
                 alt={props.name}/>
            
            </Link>
            <h1>{props.name}</h1>
         
        </div>
    )
}
export default Card