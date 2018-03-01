import React from 'react';
import ReactDOM from 'react-dom';

const List = ({name, items}) => (
  <div>
    <h3>{name}</h3>
    <ul>
      {items.map(item => {
        return (<li>{item}</li>);
      })}
    </ul>
    <form>
      <input type="text" />
      <input type="submit" />
    </form>
  </div>
);


export default List;