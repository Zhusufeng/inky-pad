import { ADD_LIST } from '../constants';

const rootReducer = (state = {}, action) => {
  switch(action.type) {
    case ADD_LIST:
      const { listName } = action; 
      const newState = Object.assign(state, listName);
      return newState; 
    default:
      return state;
  }
};

export default rootReducer;