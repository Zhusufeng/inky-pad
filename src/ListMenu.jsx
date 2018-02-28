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
    <input onClick=""/>
    <button>
      Create List
    </button>
  </div>

);

export default ListMenu;