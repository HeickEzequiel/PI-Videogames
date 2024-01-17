import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";
import axios from 'axios'


export const addFav = (game) => {
  const endpoint = 'http://localhost:3001/favorites';
  
  return async (dispatch) => {
    try {
      console.log(game)  
      const { data } = await axios.post(endpoint, game)
      return dispatch({
        type: ADD_FAV,
        payload: data,
     });   
   
    } catch (error) {
      alert(error.message)
        }
     };  
};



export const removeFav = (id) => {
  const endpoint = 'http://localhost:3001/favorites/'+id;
 
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint)
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });

    } catch (error) {
        alert (error.message)
      }
  }
}


export function filterCards(platforms) {
  return {
    type: FILTER,
    payload: platforms
  }
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order
  }
}