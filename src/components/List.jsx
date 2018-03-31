import React from 'react';
import { connect } from 'react-redux';
import { addTask, finishTask } from '../actions';

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

  finishTask (task) {
    console.log('task is finished: ', task);
    this.props.finishTask(task, this.props.name);
  }

  render () {
    console.log('this.props: ', this.props);
    return (
      <div>
        <h3>{this.props.name}</h3>
        <ul> 
          {
            this.props.items.map((item, key) => {
              return (
                <li 
                  key={key}
                >
                  <input 
                    type="checkbox" 
                    key={key} 
                    id={}
                  />
                  <label for={}>
                    {item}
                  </label>
                </li>
              );
            })
          }
        </ul>
        <div>
          <input 
            type="text" 
            onChange={(e) => this.setState({ task: e.target.value})}
          />
          <button 
            onClick={() => this.addToList(this.state.task)}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, { addTask })(List);