import { createSelector } from 'reselect';

const getCartProduct = createSelector(state => state.get('cart'), cart => cart);

export default getCartProduct;
