import { combineReducers } from 'redux';
import resultsReducer from './resultsReducer';
import favoriteReducer from './favoriteReducer';

export default combineReducers({
  results: resultsReducer,
  favorites: favoriteReducer,
});
