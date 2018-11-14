import { List } from 'immutable';
import { handleActions } from 'redux-actions';
import { addToCart } from 'actions';

export const initialCartState = List([]);

const cart = handleActions(
  {
    [addToCart]: (state, action) => state.push(action.payload.id),
  },
  initialCartState,
);

export default cart;