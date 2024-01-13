import { useState } from "react"
import validation from "../../utils/validation"


function newUser (props){
   
    const [userData, setUserData] = useState ({
            name: "",
            lastName: "",
            email:"",
            password: ""
        })
        
        const [errors, setErrors] = useState({
            name: "Ingrese su nombre",
            lastName: "Ingrese su apellido",
            email: "Ingrese su email",
            password: "Ingrese su password"
        })
        
        const handleChange = (event) => {
            const {name, value} = event.target
            setUserData({
                ...userData,
                [name]: value
            })
            setErrors(validation({
                ...userData,
                [name]: value 
            }))
        }
            
        const handleSubmit = async (event) => {
            event.preventDefault();
          
            try {
              const response = await fetch('http://localhost:3001/newuser/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
              });
          
              if (response.ok) {
                // El usuario se guardó correctamente
                console.log('Nuevo usuario creado con éxito');
              } else {
                // Error al guardar el usuario
                console.error('Error al guardar nuevo usuario:', response.statusText);
              }
            } catch (error) {
              console.error('Error al realizar la solicitud:', error);
            }
          };

return(
    <div>
    <form onSubmit={handleSubmit} >

    <label style={{color: "black"}}>Nombre: </label>
        <input type='text'
               key="name"
               name= "name"
               value={userData.name}
               placeholder="Ingresar nombre"
               onChange={handleChange}
            />
            <p style={{color: "red"}}>{ errors.name ? errors.name : null }</p>
        <br />


    <label style={{color: "black"}}>Apellido: </label>
        <input type='text'
               key="lastName"
               name= "lastName"
               value={userData.lastName}
               placeholder="Ingresar apellido"
               onChange={handleChange}
            />
            <p style={{color: "red"}}>{ errors.lastName ? errors.lastName : null }</p>
        <br />



        <label style={{color: "white"}}>Email: </label>
        <input type='text'
               key="email"
               name= "email"
               value={userData.email}
               placeholder="Ingresar email"
               onChange={handleChange}
            />
            <p style={{color: "red"}}>{ errors.email ? errors.email : null }</p>
        <br />

        
        <label style={{color: "white"}}>Password: </label>
        <input type='password'
               key="password"
               name= "password"
               value={userData.password}
               placeholder="Ingresar password"
               onChange={handleChange}
            />
             <p style={{color: "red"}}>{ errors.password && errors.password }</p>
        <br />

        <button
                type="submit"
                disabled={ errors.email || errors.password }
            >
            Crear usuario! </button>
        
    </form>
    
</div>
)
}
export default newUser