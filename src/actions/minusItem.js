import { createAction } from 'redux-actions';

export const minusItem = createAction('MINUS_ITEM', id => ({ id }));

export default minusItem;