import React, { Component } from 'react';
// import components

import { QuestionChoice } from './QuestionChoice.jsx';


class Question extends Component {

  handleChoiceClick(choiceIndex) {
    let chosenChoiceIndex = choiceIndex;
    let correctChoiceIndex = this.props.correct_choice;
    if (chosenChoiceIndex === correctChoiceIndex) {
      this.props.handle_answer(true);
      console.log("Correct");
    } else {
      this.props.handle_answer(false);
      console.log("Incorrect");
    }
  }

  render() {
    let choiceElements = this.props.choices.map((choice, i) =>
      <QuestionChoice
          handleChoice = {() => this.handleChoiceClick(i)}
          choice={choice} />);
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
