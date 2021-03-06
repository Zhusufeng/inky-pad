import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from './List.jsx';

class ListsContainer extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
          {
            Object.keys(this.props.lists).map((listName, key) => {
              return (
                <List 
                  name={listName} 
                  items={this.props.lists[listName]}
                  key={key}
                />
              );
            })
          }
      </div>
    );
  }
}

function mapStateToProps(state) {
  if (!state.lists) {
    return {
      lists: {}
    };
  } else {
    const { lists } = state; // grab lists object from store
    return {
      lists
    };
  }
}

export default connect(mapStateToProps, null)(ListsContainer);