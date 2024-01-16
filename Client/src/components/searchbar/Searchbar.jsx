import { useState } from "react";


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
      <div >
         <input 
            type='text'
            name= "search"
            id= "search"
            onChange = {handleChange}
            value={name} />
         <button onClick={handleClick} >Agregar</button>
      </div>
   );
}
export default SearchBar