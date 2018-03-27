import { ADD_LIST } from '../constants';

export const addList = (listName) => {
  const action = {
    type: ADD_LIST,
    listName
  };
  console.log('action in addList', action);
  return action;
};