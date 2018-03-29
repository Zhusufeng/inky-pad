import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

class List extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      task: ''
    };
  }

  addToList (task) {
    console.log('task is ', task);
    this.props.addTask(task, this.props.name);
  }

  render () {
    console.log('this.props: ', this.props);
    return (
      <div>
        <h3>{this.props.name}</h3>
        <ul> 
          {
            this.props.items.map((item, key) => {
              return (<li key={key}>{item}</li>);
            })
          }
        </ul>
        <form>
          <input 
            type="text" 
            onChange={(e) => this.setState({ task: e.target.value})}
          />
          <input 
            type="submit" 
            onClick={() => this.addToList(this.state.task)}
          />
        </form>
      </div>
    );
  }
}

export default connect(null, { addTask })(List);