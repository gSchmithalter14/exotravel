function favoriteReducer(state = [], action) {
  const {
    type, newFavorite, id, description,
  } = action;
  switch (type) {
    case 'ADD_TO_FAV': {
      return [newFavorite, ...state];
    }
    case 'REMOVE_FROM_FAV': {
      return state.filter((fav) => fav.id !== id);
    }
    case 'ADD_DESCRIPTION': {
      return state.map((item) => {
        // Find the item with the matching id
        if (item.id === id) {
          // Return a new object
          return {
            ...item, // copy the existing item
            description, // update the description field
          };
        }
        // Leave every other item unchanged
        return item;
      });
    }
    default:
      return state;
  }
}

export default favoriteReducer;
