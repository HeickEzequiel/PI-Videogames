import React, { useState } from "react";
import validation from "../../utils/validation";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css"
function Form(props){
    
    const navigate = useNavigate ();
    
    const [userData, setUserData] = useState ({
        email:"",
        password: ""
    })

    const [errors, setErrors] = useState({
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
        [name]: value})
    )
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        props.login(userData);
    }

    const handleNewUser = () => {
        navigate("/newuser");
    };

    return(
        <div>
            <form onSubmit={handleSubmit} >
                <label style={{color: "white"}}>Email: </label>
                    <input 
                        type='text'
                        key="email"
                        name= "email"
                        value={userData.email}
                        placeholder="Ingresar email"
                        onChange={handleChange}
                    />
                <p style={{color: "red"}}>{ errors.email ? errors.email : null }</p>
            <br />
                <label style={{color: "white"}}>Password: </label>
                    <input 
                        type='password'
                        key="password"
                        name= "password"
                        value={userData.password}
                        placeholder="Ingresar password"
                        onChange={handleChange}
                    />
                <p style={{color: "red"}}>{ errors.password && errors.password }</p>
            <br />
                <button
                    className={styles.button}
                    type="submit"
                    disabled={ errors.email || errors.password }
                    >
                    Ingresar</button>
                <button
                    className={styles.button}
                    type="button"
                    onClick={handleNewUser}>
                    Crear nuevo usuario
                    </button>
            </form>
            
        </div>

    )
}

export default Form