import React from 'react';
import ReactDOM from 'react-dom';

const ListMenu = ({lists}) => (
  <div>
    <h3>Lists</h3>
    <ul>
      {
        Object.keys(lists).map(item => {
          return (<li>{item}</li>);
        })
      }
    </ul>
  </div>

);

export default ListMenu;