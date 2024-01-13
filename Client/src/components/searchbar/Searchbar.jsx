import { useState } from "react";


function SearchBar(props) {

   const [ id, setId] = useState ("")
   const handleChange = event => {
      const {value} = event.target 
      setId(value)
   }
   
   const handleClick = event => {
      event.preventDefault()
      props.onSearch(id)
      setId("")
   }

   const handleRandom = () => {
      const randomNum = Math.floor(Math.random()*826)+1
      props.onSearch(randomNum)
   }

   return (
      <div >
         <input 
         type='text'
         name= "search"
         id= "search"
         onChange = {handleChange}
         value={id} />
         
         
         <button onClick={handleClick} >Agregar</button>
         <button onClick={handleRandom}>Personaje Random</button>
         <br />
         <hr />
         <br />
      </div>
   );
}
export default SearchBar