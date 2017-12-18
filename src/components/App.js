import React, { Component } from 'react';
import Quiz from './Quiz';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2 className="App-title">Quizzes App</h2>
        </div>
        <Quiz theme='Тема: "США"' />
      </div>
    );
  }
}
