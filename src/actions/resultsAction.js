const apiKey = 'R7AKtourLHlFQco2ccOQAmXv16LR9_JDX01SjJ57fA4';
const count = 10;

export const getResults = (keyword) => (dispatch) => fetch(`https://api.unsplash.com/photos/random/?client_id=${apiKey}&query=${keyword}&count=${count}`)
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

export const loadMoreResults = (keyword) => (dispatch) => fetch(`https://api.unsplash.com/photos/random/?client_id=${apiKey}&query=${keyword}&count=${count}`)
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
