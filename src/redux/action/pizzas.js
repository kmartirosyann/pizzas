import axios from "axios";

export const setLeaded = (payload) => ({
  type: "SET_LEADED",
  payload,
});

export const fetchPizzas = (cotigori, sortBy) => (dispatch) => {
  console.log(cotigori, sortBy);
  dispatch(setLeaded(false));
  axios
    .get(
      `http://localhost:8800/pizzas?${
        cotigori != null ? `category=${cotigori}` : ""
      }&_sort=${sortBy}&_order=desc`
    )
    .then(({ data }) => {
      console.log(data);
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
