import { useEffect, useState } from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import './App.css';
import axios from "axios";
import Nav from './components/nav/Nav.jsx';
import Form from './components/form/Form.jsx'
import Newuser from './components/newUser/Newuser.jsx';
import Cards from './components/cards/Cards.jsx';

function App() {

    const [games, setGames] = useState([])
    const navigate = useNavigate();
    const location = useLocation();

  
    const [access, setAccess] = useState(false);
    
    
    async function login (userData) {
        try{
            const {email, password} = userData;
            const URL = 'http://localhost:3001/';
            const { data } = await axios(URL + `?email=${email}&password=${password}`)
            if(data.access){
                setAccess(data.access);
                navigate('/home')
            }else {
                alert("Los datos son incorrectos!")
            }
        }catch(error){
            alert(error.message)
        }
    }
    
    
    
    function logout() {
        setAccess(false);
    }
        useEffect(()=>{
            !access && navigate('/');},[access]);
    
            
            
    async function videogames (){
                try{
                    const {data} = await axios ('http://localhost:3001/home')
                    if(data.name){
                        setGames([...games, data])
                        navigate("/home")
                    } else{
                        alert('no hay juegos')
                    }
                }
                catch (error) {
                    alert('error en el try-catch', error.message)
                }
            }
            
       
            
  
  
  
  
  
  
     async function onSearch(id) {
        try {
            const gameId = games.filter(
                   (game) => game.id === Number(id))
                      if(gameId.length){
                         return alert(`El juego con id ${id} ya existe`)
                      }    
                   const { data } = await axios(`http://localhost:3001/videogame/${id}`)
                   if(data.name) {
                      setGames([...games, data])
                      navigate("/home")
                   } else {
                      alert('¡No hay juegos con este ID!')
                   }
            } 
             catch (error) {
                   alert(error.message)
                }
        }




return(
    <div>
      {
        location.pathname !== "/" ? <Nav onSearch = {onSearch} logout= {logout}/>:null
      }
      <Routes>
        <Route 
            path="/"
            element= {<Form login = {login}/>} 
            />
        <Route
            path="/newuser"
            element= {<Newuser/>}
            />
        <Route
            path="/home"
            element= {<Cards videogames = {videogames}/>}
            />
        </Routes>
    </div>
)

}

export default App;
