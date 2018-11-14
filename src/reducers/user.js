import { Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { addUser } from 'actions';

export const initialUserState = Map({name:'',address:''});

const user = handleActions(
  {
    [addUser]: ({payload}) => payload,
  },
  initialUserState,
);

export default user;
