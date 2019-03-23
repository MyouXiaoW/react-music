import {combineReducers} from 'redux';

const banner = (state = {}, action) => {
  switch (action.type) {
    case 'success':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({banner});
