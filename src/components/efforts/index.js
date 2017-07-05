import React, { Component } from 'react';
import Effort from '../effort';
import EffertsService from './service';
import './index.css';

class Efforts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      efforts: null
    };

    EffertsService.getEfforts()
    .then(this.setEfforts.bind(this));
  }

  setEfforts (resp) {
    this.setState({
      efforts: resp.data
    });
  }

  render() {
    return (
      <ul className="Efforts">
      {
        this.state.efforts ? (
          this.state.efforts.map(e => <Effort effort={e} key={e.properties.id.toString()}/>)
        ) : (
          <li>Loading efforts...</li>
        )
      }
      </ul>
    );
  }
}

export default Efforts;
