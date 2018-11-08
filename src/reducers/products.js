import { List, fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { FULFILLED } from 'redux-promise-middleware';
import { fetchProducts } from 'actions';

export const initialProductsState = List([]);

const products = handleActions(
  {
    [`${fetchProducts}_${FULFILLED}`]: (state, { payload: { data } }) => fromJS(data),
  },
  initialProductsState,
);

export default products;
