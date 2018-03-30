import { ADD_LIST, ADD_TASK, FINISH_TASK } from '../constants';

export const addList = (listName) => {
  const action = {
    type: ADD_LIST,
    listName
  };
  console.log('action in addList', action);
  return action;
};

export const addTask = (task, listName) => {
  const action = {
    type: ADD_TASK,
    task,
    listName
  };
  console.log('action in addTask', action);
  return action;
};

export const finishTask = (task, listName) => {
  const action = {
    type: FINISH_TASK,
    task,
    listName
  };
  console.log('action in finishTask', action);
  return action;
};