import { createSelector } from 'reselect';
import getProductInCart from './getProductInCart';

const getProductCartCount = createSelector(
  getProductInCart,
  products => products.size,
);

export default getProductCartCount;
