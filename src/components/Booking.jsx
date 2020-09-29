import React from 'react';
import { hot } from 'react-hot-loader/root';
import Calendar from './Calendar';
import Widget from './Widget';

class Booking extends React.Component {
  constructor() {
    super();
    this.state = {
      currentMonth: 10,
    };
  }

  render() {
    return (
      <>
        <h1>Hello World from Inside the Booking Component! Testing Again!</h1>
        <Widget />
        <Calendar />
      </>
    );
  }
}

export default hot(Booking);
