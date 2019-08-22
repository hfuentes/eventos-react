import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Events from './components/Events';
import EventService from './services/EventService';
import Menu from './components/Menu';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: EventService.getEvents()
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Events events={this.state.events} />
        </div>
        <Menu />
      </React.Fragment>
    );
  }
}