export const initState = {
  winnersList: [],
  isFetching: false,
  filters: {
    year:"",
    category:"",
  },
};

const reducer = (state = { ...initState }, action) => {
  switch (action.type) {
    case "FETCH_LIST":
      return {
        ...state,
        winnersList: action.payload.winnersList || state.winnersList,
        isFetching: action.payload.isFetching,
        filters: {
          ...state.filters,
          ...(action.payload.filters || state.filters),
        },
      };
    default:
      return state;
  }
};

export default reducer;
