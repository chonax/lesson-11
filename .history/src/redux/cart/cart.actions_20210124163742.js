import { CartActionTypes } from './cart.types';

export const setCurrentUser = cart => ({
  type: CartActionTypes.SET_HIDDEN,
  payload: cart
})