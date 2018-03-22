import React from 'react';
import ReactDOM from 'react-dom';

export default class List extends React.Component {
  constructor (props) {
    super(props);

  }

  addToList (e) {
    e.preventDefault();
    console.log('e is ', e);
    console.log('e.target is ', e.target);
    console.log('e.target[0].value is ', e.target[0].value);
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
        <form onSubmit={this.addToList.bind(this)}>
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}