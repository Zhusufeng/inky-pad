import React from 'react';
import ReactDOM from 'react-dom';

const ListMenu = ({lists, createList}) => (
  <div>
    <h3>Lists</h3>
    <ul>
      {
        Object.keys(lists).map(item => {
          return (<li>{item}</li>);
        })
      }
    </ul>
    <input type="text" id="list-menu-input"/>
    <button
      onClick={(e) => {
        const input = document.getElementById('list-menu-input').value;
        return createList(input);
      }}
    >
      Create List
    </button>
  </div>

);

export default ListMenu;