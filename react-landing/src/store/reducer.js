const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: [...state.products, action.payload.product],
        totalPrice: state.totalPrice + parseInt(action.payload.product.price),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.product.id
        ),
        totalPrice: state.totalPrice - action.payload.product.price,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
