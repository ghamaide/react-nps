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

    const buttonStyle = {
      backgroundActiveColor: '#D32F2F',
      backgroundColor: '#E57373',
      textActiveColor: '#FFFFFF',
      textColor: '#000000',
    };

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
        <button onClick={this.onClose}>Close panel</button>
        <NPS
          animationDuration={1}
          open={isNpsOpen}
          onClose={this.onClose}
          onSubmit={this.onSubmit}
          style={buttonStyle}
        />
      </div>
    );
  }
}
