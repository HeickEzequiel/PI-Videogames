import axios from 'axios'


export const addFav = (game) => {
  const endpoint = 'http://localhost:3001/favorites';
  console.log(game)
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, game)
      return dispatch({
        type: "ADD_FAV",
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
        type: "REMOVE_FAV",
        payload: data,
      });

    } catch (error) {
        alert (error.message)
      }
  }
}


export function filterCards(rating) {
  return {
    type: "FILTER",
    payload: rating
  }
}

export function orderCards(order) {
  return {
    type: "ORDER",
    payload: order
  }
}