import { ADD_FAV, FILTER, ORDER, REMOVE_FAV,} from "./action-types";


const initialState = {
  myFavorites: [],
  allGames: []
}



function reducer(state = initialState, { type, payload }) {

  switch(type) {


    case ADD_FAV:
      return { ...state, myFavorites: payload, allGames: payload };
    
    case REMOVE_FAV:
      return { ...state, myFavorites: payload, allGames: payload };
    
    
    case FILTER:{
   
      if(payload === "All") return {
        ...state,
        myFavorites: state.allGames
      }
      const filteredFavs = state.allGames.filter(
        game => game.platforms === payload
      )
      return {
        ...state,
        myFavorites: filteredFavs
      }
    }
    case ORDER:
      const orderCopy = [...state.myFavorites];
      if(payload === "A")
        orderCopy.sort((a, b) => a.id - b.id);
      if(payload === "D")
        orderCopy.sort((a, b) => b.id - a.id);
      return {
        ...state,
        myFavorites: orderCopy
      }

        default:
          return { ...state }
  }
}
export default reducer