import React, { Component } from 'react';
import '../css/App.css';
// import components
import { Question } from "./Question.jsx";
import { buildFirebase, getRandomQuestion } from "../clients/firebase.js";

class App extends Component {
  constructor(props) {
    super(props);
    let blankQuestion = {
      question_text: "",
      choices: [],
      correct_choice_index: -1,
    };
    this.state = {
      question: blankQuestion,
      score: 0,
    };

    let database = buildFirebase();
    database.ref("/questions").once("value").then((snapshot) => {
      let questions = snapshot.val();
      let questionToAsk = getRandomQuestion(questions);
      this.setState({ question: questionToAsk });
    });
  }

  handleAnswer(isCorrect) {
    if (isCorrect === true) {
      let currentScore = this.state.score;
      this.setState({ score: currentScore + 10 });
    }

    let database = buildFirebase();
    database.ref("/questions").once("value").then((snapshot) => {
      let questions = snapshot.val();
      let questionToAsk = getRandomQuestion(questions);
      this.setState({ question: questionToAsk });
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Score: {this.state.score}</h1>
        <Question
            text = {this.state.question.question_text}
            choices = {this.state.question.choices}
            correct_choice = {this.state.question.correct_choice_index}
            handle_answer = {(isCorrect) => this.handleAnswer(isCorrect)}
            />
      </div>
    );
  }
}

export default App;
