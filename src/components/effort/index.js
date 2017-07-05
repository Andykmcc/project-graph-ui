import React, { Component } from 'react';
import './index.css';

class Effort extends Component {
  render() {
    return (
      <li className="Effort">
        <h4 className="Effort__title">{this.props.effort.properties.title}</h4>
        <p className="Effort__description">{this.props.effort.properties.description}</p>
      </li>
    );
  }
}

export default Effort;
