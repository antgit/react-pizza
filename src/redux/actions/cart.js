export const addPizzaToCart = (pizzaObj) => ({
  type: 'ADD_PIZZA_CART',
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const removeCartItem = (idSize) => ({
  type: 'REMOVE_CART_ITEM',
  payload: idSize,
});

export const plusCartItem = (Obj) => ({
  type: 'PLUS_CART_ITEM',
  payload: Obj,
});

export const minusCartItem = (Obj) => ({
  type: 'MINUS_CART_ITEM',
  payload: Obj,
});
