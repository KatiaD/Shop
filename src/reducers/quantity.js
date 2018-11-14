import { Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { addToCart, minusItem, plusItem } from 'actions';

export const initialQuantityState = Map({});

export const quantity = handleActions(
    {
      [addToCart]: (state, action) => {
        const { id } = action.payload;
        return state.merge({ [id]: state.get(id) ? state.get(id) + 1 : 1 });
      },
      [minusItem]: (state, action) => {
        const { id } = action.payload;
        const strId = String(id);
        return state.merge({ [id]: state.get(strId) ? (state.get(strId)== 1 ? state.get(strId):state.get(strId) - 1) : 1 });
      },
  
      [plusItem]: (state, action) => {
        const { id } = action.payload;
        const strId = String(id);
        return state.merge({ [id]: state.get(strId) ? state.get(strId) + 1 : 1 });
      },
    },
    initialQuantityState,
  );

  export default quantity;