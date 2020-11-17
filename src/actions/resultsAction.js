/* eslint-disable no-console */
const baseUrl = 'https://api.unsplash.com/';
const apiKey = process.env.REACT_APP_API_KEY;
const options = `client_id=${apiKey}`;
const count = 10;

export const getResults = (keyword) => (dispatch) => fetch(`${baseUrl}photos/random/?${options}&count=${count}&query=${keyword}`)
  .then((res) => res.json())
  .then((data) => {
    dispatch({
      type: 'GET_RESULTS',
      unfilteredData: data,
      keyword,
    });
  })
  .catch((err) => {
    console.error('IMAGES NOT FETCHED:', err);
  });

export const loadMoreResults = (keyword) => (dispatch) => fetch(`${baseUrl}photos/random/?${options}&count=${count}&query=${keyword}`)
  .then((res) => res.json())
  .then((data) => {
    dispatch({
      type: 'LOAD_MORE_RESULTS',
      unfilteredData: data,
      keyword,
    });
  })
  .catch((err) => {
    console.error('IMAGES NOT FETCHED:', err);
  });

export default getResults;
