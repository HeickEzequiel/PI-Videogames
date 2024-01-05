import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";
import axios from 'axios'

export const addFav = (videogame) => {
    const endpoint = 'http://localhost:3001/videogame/fav'
    return async (dispatch) => {
        try {
          const { data } = await axios.post(endpoint, videogame)
          return dispatch({
            type: ADD_FAV,
            payload: data,
         });   
       
        } catch (error) {
          alert(error.message)
            }
         };  
    };
