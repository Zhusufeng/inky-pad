import React from 'react';
import ReactDOM from 'react-dom';

const ListMenu = ({lists, createList}) => (
  <div>
    <h3>Lists</h3>
    <ul>
      {
        Object.keys(lists).map((item, key) => {
          return (<li key={key}>{item}</li>);
        })
      }
    </ul>
    <input 
      type="text" 
      id="list-menu-input"
      minLength="1"
      maxLength="20" 
      required
    />
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