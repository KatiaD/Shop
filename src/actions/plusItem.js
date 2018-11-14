import { createAction } from 'redux-actions';

export const plusItem = createAction('PLUS_ITEM', id => ({ id }));

export default plusItem;