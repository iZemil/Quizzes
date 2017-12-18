import React, { Component } from 'react';

export default class Option extends Component {
  render() {
    const { value, name } = this.props;

    return (
      <li>
        <label>
          <input type="radio" name={ name } value={value} />
          <span>{ value }</span>
        </label>
      </li>
    )
  }
}