export default function (state = {}, action) {
  const { type, keyword, data } = action;
  switch (type) {
    case 'GET_RESULTS':
      return { keyword, data };
    default:
      return state;
  }
}
