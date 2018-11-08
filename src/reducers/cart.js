import { addToCart } from 'actions';
import { handleActions } from 'redux-actions';
import { Map } from 'immutable';

export const initialCartState = Map();

const productsInCart = handleActions(
  {
    [addToCart]: (state, action) => state.set(action.payload, 1),
  },
  initialCartState,
);

export default productsInCart;
