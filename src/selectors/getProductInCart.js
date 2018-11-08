import { createSelector } from 'reselect';

const getProductInCart = createSelector(state => state.get('productsInCart'), productsInCart => productsInCart);

export default getProductInCart;
