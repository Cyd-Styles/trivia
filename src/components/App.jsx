import React, { Component } from 'react';
import '../css/App.css';
// import components
import { Question } from "./Question.jsx";

class App extends Component {

  render() {
    return (
      <div className="app">
        Kahoot!
        <Question text = "How many states are in the US?" choices = "48, 50" /> 
        <Question text = "What is My Name?" choices = " Cydney, Shania, Joe"> </Question> 
      </div>
    );
  }
}

export default App;