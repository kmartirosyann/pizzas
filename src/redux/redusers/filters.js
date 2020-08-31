const initialState = {
  cotigori: null,
  sortBy: "price",
};

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.payload,
      };
      case "SET_CATEGORY":
        return{
          ...state,
          cotigori:action.payload
        }
  }
  return state;
};

export default filters;
