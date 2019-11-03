const initState = { food: null, foods: [] };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_DETAIL":
      return { ...state, food: action.data };
    case "SET_DETAILS":
      return { ...state, foods: action.data };
    default:
      return state;
  }
  // console.log(state);
};
export default reducer;
