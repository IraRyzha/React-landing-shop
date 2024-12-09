const addToCart = (dispatch, product) => {
  dispatch({ type: "ADD_TO_CART", payload: { product } });
};

const removeFromCart = (dispatch, product) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: { product } });
};

export { addToCart, removeFromCart };
