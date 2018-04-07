import React, { Component } from 'react';
import ListMenu from './ListMenu.jsx';
import ListsContainer from './ListsContainer.jsx';
import '../styles.css';

class App extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>Inky Pad</h1>
        <ListMenu />
        <ListsContainer />
      </div>
    );
  }
}

export default App;