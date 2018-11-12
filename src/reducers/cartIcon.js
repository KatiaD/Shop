import { addToCartIcon } from "actions";
import { handleActions } from "redux-actions";
import { Map } from "immutable";

export const initialCartIconState = Map();

const CartIcon = handleActions(
  {
    [addToCartIcon]: (state, action) => state.set(action.payload, 1)
  },
  initialCartIconState
);

export default CartIcon;
