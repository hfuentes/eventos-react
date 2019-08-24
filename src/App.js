import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Events from './components/Events';
import EventService from './services/EventService';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: EventService.getEvents()
    };
  }
  render() {
    return (
      <Events events={this.state.events} />
    );
  }
}