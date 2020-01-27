import React, { Component } from 'react';
// import components


class Question extends Component {
  
  render() {
    return (
      <div>
        {this.props.text}  
        {this.props.choices}
      </div>
    );
  }
}

export { Question };