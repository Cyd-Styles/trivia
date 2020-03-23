import React, { Component } from 'react';
// import components


class Question extends Component {
  
  render() {
    let choiceElements = this.props.choices.map(
        (choice) => <li>{choice}</li>);
    return (
      <div>
        {this.props.text}  
        <br />
        {choiceElements}
        <br />
      </div>
    );
  }
}

export { Question };
