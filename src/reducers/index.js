import { ADD_LIST, ADD_TASK, FINISH_TASK } from '../constants';

let defaultState = {
  lists: {},
  // history: {}
};

/*
  Idea
    1. Comment out below

    2. Test: Create a separate reducer for list and task
    You will need to use combineReducers
    Mock up how the whole state should look like
    
    3. Test 2: Make list an object. Use a random ID for each task 
    as the key. Create history key in object that holds an array
    of finished tasks 
*/
const rootReducer = (state = defaultState, action) => {
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


