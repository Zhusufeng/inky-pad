import React from 'react';
import ReactDOM from 'react-dom';
import ListMenu from './ListMenu.jsx';
import ListsContainer from './ListsContainer.jsx';

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

  createList (listName) {
    console.log('Create list was clicked: ', listName);
    const newList = {[listName]: []};
    console.log(newList);
    this.setState({
      lists: Object.assign({}, this.state.lists, newList) 
    }, () => {
      console.log(this.state);
    });
  }

  render () {
    return (
      <div>
        <h1>Inky Pad</h1>
        <ListMenu 
          lists={this.state.lists}
          createList={this.createList.bind(this)}
        />
        <ListsContainer 
          lists={this.state.lists}
        />
      </div>
    );
  }
}