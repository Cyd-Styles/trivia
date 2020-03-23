import React, { Component } from 'react';

class QuestionChoice extends Component {

  handleChoiceClick() {
    this.props.handleChoice();
  }

  render() {
    return (
      <button onClick={(e) => this.handleChoiceClick()}>
        {this.props.choice}
      </button>
    );
  }
}

export { QuestionChoice };

