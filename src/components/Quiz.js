import React, { Component } from 'react';
import Question from './Question';

const questions = [
  {
    question: "Who was the first President of the United States?",
    options: [ "George Washington", "Thomas Jefferson", "Thomas Edison", "I don't know" ]
  },
  {
    question: "What's the best programming language?",
    options: ["Javascript","C#", "Php", "Python"]
  },
]

export default class Quiz extends Component {

  render() {

    return (
      <div>
        <h2>Quiz: {this.props.theme}</h2>
        <hr/>
        <Question data={questions[0]} />
      </div>
    )
  }
}