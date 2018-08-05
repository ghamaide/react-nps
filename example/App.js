import React from 'react';
import { NPS } from '../src';

export default class App extends React.Component {
  state = {
    isNpsOpen: false,
    date: null,
    score: 'No score submitted yet',
  };

  displayMessageOnOpen = () => {
    this.setState({ date: new Date().toLocaleString() });
  };

  onClose = () => {
    this.setState({ isNpsOpen: false });
  };

  onOpen = () => {
    this.setState({ isNpsOpen: true });
  };

  onSubmit = score => {
    this.setState({ score });
  };

  render() {
    const { isNpsOpen, date, score } = this.state;

    return (
      <div style={{ height: '500px', margin: '50px' }}>
        <p>The submitted score is : {score}</p>
        <p>The panel is : {isNpsOpen ? 'open' : 'closed'}</p>
        {date && (
          <p>
            The message is : {isNpsOpen ? 'opened' : 'closed'} on {date}
          </p>
        )}
        <button onClick={this.onOpen}>Open panel</button>
        <NPS
          animationDuration={1}
          buttonColor="#EF9A9A"
          buttonHoveredColor="#C62828"
          open={isNpsOpen}
          onClose={this.onClose}
          onOpen={this.displayMessageOnOpen}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
