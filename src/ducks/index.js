import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export const MOVE = 'MOVE';
export const move = position => ({
  type: MOVE,
  position,
});

const position = (state = { x: 10, y: 10 }, action) => {
  switch (action.type) {
    case MOVE:
      return { ...state, ...action.position };
    default:
      return state;
  }
};

export default combineReducers({
  position,
  form: formReducer,
});
