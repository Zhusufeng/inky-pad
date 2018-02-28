import React from 'react';
import ReactDOM from 'react-dom';
import ListMenu from './ListMenu.jsx'

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      lists: {
        homework: [
          'Read Tale of Two Cities',
          'Finish Chapter 2 problems'
        ],
        chores: [
          'Wash dishes',
          'Do laundry'
        ]
      },
      history: []
    };
  }

  render () {
    return (
      <div>
        <h1>Inky Pad</h1>
        <ListMenu lists={this.state.lists}></ListMenu>
      </div>
    );
  }
}