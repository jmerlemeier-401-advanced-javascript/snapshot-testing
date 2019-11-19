import React from 'react';

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  //event comes from browser when 'onClick' occurs
  handleCount = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  }


  render() {
    return(
      <div>
      <p>Count: {this.state.count}</p>
      <button onClick={this.handleCount}></button>
      </div>
    ) 
  }
}

export default Counter;