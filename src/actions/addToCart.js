import { createAction } from 'redux-actions';

const addToCart = createAction('ADD_TO_CART', id => ({ id }));

export default addToCart;
