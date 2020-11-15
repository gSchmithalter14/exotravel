function resultsReducer(state = {}, action) {
  const { type, keyword, unfilteredData } = action;
  switch (type) {
    case 'GET_RESULTS': {
      const data = unfilteredData.filter((d) => d.location.title !== null);
      console.log(data);
      return { keyword, data };
    }

    default:
      return state;
  }
}

export default resultsReducer;
