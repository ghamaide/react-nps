// @flow

import React from 'react';

import { DEFAULT_MESSAGE } from '../constants';
import Button from '../ScoreButton';

import { Close, Content, Message, Style } from './Wrapper.style';

type PropsType = {
  message?: string,
};

export default class Wrapper extends React.Component<PropsType, StateType> {
  constructor(props) {
    super(props);

    this.state = {
      hoveredScore: -1,
      open: true,
      visible: true,
    };
  }

  onClose = () => {
    const { onClose } = this.props;

    this.setState({ open: false });
    setTimeout(() => {
      this.setState({ visible: false });
    }, 2000);

    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  };

  onMouseEnter = buttonScore => () => {
    this.setState({
      hoveredScore: buttonScore,
    });
  };

  onMouseLeave = () => {
    this.setState({
      hoveredScore: -1,
    });
  };

  onSubmit = buttonScore => () => {
    const { onSubmit } = this.props;

    if (onSubmit && typeof onSubmit === 'function') {
      onSubmit(buttonScore);
    }
    this.onClose();
  };

  render() {
    const { style, message } = this.props;
    const { hoveredScore, open, visible } = this.state;

    if (!visible) {
      return null;
    }

    return (
      <Style open={open} style={style}>
        <Close onClick={this.onClose} />
        <Message>{message || DEFAULT_MESSAGE}</Message>
        <Content>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(score => (
            <Button
              buttonScore={score}
              hoveredScore={hoveredScore}
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
              onSubmit={this.onSubmit}
            />
          ))}
        </Content>
      </Style>
    );
  }
}
