function favoriteReducer(state = [], action) {
  const { type, newFavorite, id } = action;
  switch (type) {
    case 'ADD_TO_FAV': {
      return [newFavorite, ...state];
    }
    case 'REMOVE_FROM_FAV': {
      return state.filter((fav) => fav.id !== id);
    }
    default:
      return state;
  }
}

export default favoriteReducer;
