import { useEffect, useState } from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import './App.css';
import axios from "axios";
import Nav from './components/nav/Nav.jsx';
import Form from './components/form/Form.jsx'
import Newuser from './components/newUser/Newuser.jsx';
import Cards from './components/cards/Cards.jsx';
import Detail from './components/detail/Detail.jsx';
import Search from './components/search/Search.jsx';
import Newgame from './components/newGame/Newgame.jsx';
import Favs from './components/favs/Favs.jsx';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions.js';

function App() {
    
    const initialstate = []
    const [vgames, setVgames] = useState(initialstate)
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch
    
    
    //////-----LOGIN----////////
    const [access, setAccess] = useState(false);
    async function login (userData) {
        try{
            const {email, password} = userData;
            const URL = 'http://localhost:3001/';
            const { data } = await axios.post (URL ,{email, password})
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
        
        
    /////-------LANDING PAGE--------///////    
    async function videogames (){
        try{
            const {data} = await axios ('http://localhost:3001/home')
            const vg = data.map(({id, name, platforms: platforms, background_image, released, rating}) => 
            ({id, name, platforms: platforms, background_image, released, rating}))
            
            if(vg.length>0){
                setVgames([...vgames, ...vg])
                } else{
                    alert('no hay juegos')
                    }
            }
            catch (error) {
                alert('error en el try-catch', error.message)
            }
    }
        
    //////------SEARCH------//////
    const [games, setGames] = useState(initialstate)
    async function onSearch(name) {
        try {
            const gameName = games.filter(
                (game) => game.name === name)
                    if(gameName.length){
                         return alert(`El juego ya existe`)
                        }    
                const { data } = await axios(`http://localhost:3001/videogame?name=${name}`)
                const vgName = data.map(({id, name, platforms: platforms, background_image, released, rating}) => 
                ({id, name, platforms: platforms, background_image, released, rating}))
            if(vgName.length) {
                setGames([...games, ...vgName])
                navigate("/search")
                } else {
                    alert('¡No hay juegos con este nombre!')
                }
            } 
        catch (error) {
            alert(error.message)
            }
    }
        
    /////------FUNCTION ONCLOSE-----//////
    const onClose = (id) => {
        setGames(games.filter((game) => game.id !== Number(id)))
        dispatch(removeFav(id))
        }
        



return(
    <div>
      {
        location.pathname !== "/" && location.pathname !== "/newuser" && location.pathname !== "/newgame" 
        ? <Nav onSearch = {onSearch} logout= {logout}/>
        :null
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
            element= {<Cards   videogames = {videogames} vgames = {vgames} />}
            />
        <Route
            path="/videogame/:id"
            element= {<Detail/>}
            />
        <Route
            path="/search"
            element={<Search games = {games} />}
            />
        <Route
            path="/newgame"
            element={<Newgame/>}
            />
        <Route
            path="/favorites"
            element={<Favs onClose={onClose}/>}/>
        </Routes>
    </div>
)

}

export default App;
