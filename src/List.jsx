import React from 'react';
import ReactDOM from 'react-dom';

// const List = ({name, items}) => (
//   <div>
//     <h3>{name}</h3>
//     <ul>
//       {items.map(item => {
//         return (<li>{item}</li>);
//       })}
//     </ul>
//     <form>
//       <input type="text" />
//       <input type="submit" />
//     </form>
//   </div>
// );


// export default List;

export default class List extends React.Component {
  constructor (props) {
    super(props);
  }

  addToList (e) {
    e.preventDefault();
    console.log('e is ', e);
    console.log('e.target is ', e.target);
    console.log('e.target[0].value is ', e.target[0].value);

    // const newList = {[listName]: []};
    // this.setState({
    //   lists: Object.assign({}, this.state.lists, newList) 
    // }, () => {
    //   console.log(this.state);
    // });

    this.setState({
      lists: {
        potatoes: [],
        beans: []
      }
    }, () => {
      console.log(this.state);
    })
  }

  render () {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <ul> 
          {this.props.items.map((item, key) => {
            return (<li key={key}>{item}</li>);
          })}
        </ul>
        <form onSubmit={this.addToList.bind(this)}>
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}