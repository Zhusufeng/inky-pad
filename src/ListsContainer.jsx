import React from 'react';
import ReactDOM from 'react-dom';

const ListsContainer = ({lists}) => {
  return (
    <div>
      {
        Object.keys(lists).map(list => {
          return (<List />);
        })
      }
    </div>
  );
};

export default ListsContainer;