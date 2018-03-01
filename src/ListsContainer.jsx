import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.jsx';

const ListsContainer = ({lists}) => (
  <div>
    {
      Object.keys(lists).map(list => {
        return (<List name={list} items={lists[list]}/>);
      })
    }
  </div>
);

export default ListsContainer;