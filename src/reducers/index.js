import { ADD_LIST, ADD_TASK, FINISH_TASK } from '../constants';

const rootReducer = (state = {}, action) => {
  switch(action.type) {
    case ADD_LIST: {
      const { listName } = action; 
      let lists = { 
        [listName]: [] 
      };
      if (state.lists) {
        lists = Object.assign({}, state.lists, lists);
      } 
      const newState = Object.assign({}, state, { lists });
      console.log('newState: ', newState);
      return newState; 
    }
    break;

    case ADD_TASK: {
      const { task, listName } = action;
      const newArray = [...state.lists[listName], task];
      const updateList = { 
        [listName]: newArray 
      };
      const lists = Object.assign({}, state.lists, updateList);
      const newState = Object.assign({}, state, { lists });
      console.log('newState: ', newState);
      return newState;
    }
    break;

    case FINISH_TASK: {
      const { task, listName } = action;
      const taskIndex = state.lists[listName].indexOf(task);
      const newArray = state.lists[listName].slice(0, taskIndex).concat(state.lists[listName].slice(taskIndex + 1));
      const updateList = {
        [listName]: newArray
      };
      const lists = Object.assign({}, state.lists, updateList);
      const newState = Object.assign({}, state, { lists });
      console.log('newState: ', newState);
      return newState;
    }
    break;

    default:
      return state;
  }
};

export default rootReducer;


