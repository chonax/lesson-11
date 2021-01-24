import { CartActionTypes } from './cart.types';

const INITIAL_STATE = {
  hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.SET_CURRENT_USER: 
      return {
        ...state,
        hidden: action.payload
      };
    default:
      return state;
  };
};

export default cartReducer;