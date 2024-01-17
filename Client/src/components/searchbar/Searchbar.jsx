import { useState } from "react";
import styles from "./searchbar.module.css"

function SearchBar(props) {

   const [ name, setName] = useState ("")
   
   const handleChange = event => {
      const {value} = event.target 
      setName(value)
   }
   
   const handleClick = event => {
      event.preventDefault()
      props.onSearch(name)
      setName("")
   }

 return (
      <div className={styles.body}>
         <input className={styles.bar}
            type='text'
            name= "search"
            id= "search"
            onChange = {handleChange}
            value={name} />
         <button className={styles.button} onClick={handleClick} >Agregar</button>
      </div>
   );
}
export default SearchBar