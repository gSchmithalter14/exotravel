export const addToFav = (data) => ({
  type: 'ADD_TO_FAV',
  newFavorite: data,
});

export const removeFromFav = (id) => ({
  type: 'REMOVE_FROM_FAV',
  id,
});

export const isFav = () => ({
  type: 'IS_FAV',
});
