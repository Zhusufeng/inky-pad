import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addList } from '../actions';

class ListMenu extends Component {
  constructor (props) {
    super(props);
    this.state = {
      newList: ''
    };
  }

  addList () {
    this.props.addList(this.state.newList);
  }

  render () {
    console.log('this.props', this.props);
    return (
      <div>
        <h3>Lists</h3>
        <ul>
          {
            Object.keys(this.props.lists).map((listName, key) => {
              return (<li key={key}>{listName}</li>);
            })
          }
        </ul>
        <input 
          type="text" 
          id="list-menu-input"
          required
          onChange={(e) => this.setState({newList: e.target.value})}
        />
        <button
          onClick={() => this.addList(this.state.newList)}
        >
          Create List
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { lists } = state; // grab lists object from store
  return {
    lists
  };
}

export default connect(mapStateToProps, { addList })(ListMenu);