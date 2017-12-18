import React, { Component } from 'react';
import Option from './Option';

export default class Question extends Component {
  render() {
    const { data } = this.props;
    return (
      <form className="question"
        onSubmit={ () => console.log('Next') }
      >
        <h3>Question: { data.question }</h3>
        <ul>
          { data.options.map((option, ndx) =>
            <Option
              key={ndx}
              name={data.question}
              value={option}
            />)
          }
        </ul>
        <button type="submit">Next</button>
      </form>
    )
  }
}