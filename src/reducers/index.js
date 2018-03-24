import { ADD_LIST } from '../constants';

const rootReducer = (state = {}, action) => {
  switch(action.type) {
    case ADD_LIST:

      return state; 
    default:
      return state;
  }
};

export default rootReducer;