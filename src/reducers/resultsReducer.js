function resultsReducer(state = {}, action) {
  const { type, keyword, unfilteredData } = action;
  switch (type) {
    case 'GET_RESULTS': {
      const data = unfilteredData.filter((d) => d.location.title !== null);
      return { keyword, data };
    }
    case 'LOAD_MORE_RESULTS': {
      const newData = unfilteredData.filter((d) => d.location.title !== null);
      return {
        ...state,
        data: [...state.data, ...newData],
      };
    }
    default:
      return state;
  }
}

export default resultsReducer;
