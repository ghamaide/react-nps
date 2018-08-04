import React from 'react';
import { NPS } from '../src';

export default class App extends React.Component {
  state = {
    isNpsOpen: true,
    score: 'No score submitted yet',
  };

  onClose = () => {
    this.setState({ isNpsOpen: false });
  };

  onSubmit = score => {
    this.setState({ score });
  };

  render() {
    const { isNpsOpen, score } = this.state;

    return (
      <div style={{ height: '500px', margin: '50px' }}>
        <p>The submitted score is : {score}</p>
        <p>The panel is : {isNpsOpen ? 'open' : 'closed'}</p>
        <NPS
          animated={false}
          animationDuration={3}
          buttonColor="#c2eafc"
          buttonHoveredColor="#2196f3"
          onClose={this.onClose}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
