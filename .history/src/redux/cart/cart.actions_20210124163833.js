import { CartActionTypes } from './cart.types';

export const setCurrentUser = cart => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  payload: cart
})