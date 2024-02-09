
const initialState = {
  myFavorites: [],
  allGames: []
}

function reducer(state = initialState, { type, payload }) {

  switch(type) {
    case "ADD_FAV":
      return { ...state, myFavorites: payload, allGames: payload };
    case "REMOVE_FAV":
      return { ...state, myFavorites: payload, allGames: payload };
    case "FILTER":{
      if(payload === "All") return {
        ...state,
        myFavorites: state.allGames
      }
      const filteredFavs = state.allGames.filter(
        game => game.rating === payload
      )
      return {
        ...state,
        myFavorites: filteredFavs
      }
    } 
    case "ORDER":
      const orderCopy = [...state.myFavorites];
      if(payload === "A")
        orderCopy.sort((a, b) =>a.name.localeCompare(b.name));
      if(payload === "D")
        orderCopy.sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        myFavorites: orderCopy
      }
    default:
    return { ...state }
  }
}
export default reducer