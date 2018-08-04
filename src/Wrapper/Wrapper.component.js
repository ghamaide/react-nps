// @flow

import React from 'react';

import { DEFAULT_MESSAGE } from '../constants';
import Button from '../ScoreButton';

import { Close, Content, Message, Style } from './Wrapper.style';

const DARK_BLUE = '#2196f3';
const LIGHT_BLUE = '#c2eafc';

type PropsType = {
  animated?: boolean,
  animationDuration?: number,
  buttonColor?: string,
  buttonHoveredColor?: string,
  message?: string,
  onClose?: void => void,
  onSubmit?: (?number) => void,
};

export default class Wrapper extends React.Component<PropsType, StateType> {
  static defaultProps = {
    animated: true,
    animationDuration: 2,
    buttonColor: '#c2eafc',
    buttonHoveredColor: '#2196f3',
    message: DEFAULT_MESSAGE,
    onClose: () => {},
    onSubmit: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      hoveredScore: -1,
      open: true,
      visible: true,
    };
  }

  onClose = () => {
    const { animated, animationDuration, onClose } = this.props;

    this.setState({ open: false });

    if (animated) {
      setTimeout(() => {
        this.setState({ visible: false });
      }, animationDuration * 1000);
    } else {
      this.setState({ visible: false });
    }

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
    const {
      animated,
      animationDuration,
      buttonColor,
      buttonHoveredColor,
      message,
    } = this.props;

    const { hoveredScore, open, visible } = this.state;

    if (!visible) {
      return null;
    }

    return (
      <Style
        animationDuration={animationDuration}
        className={animated ? 'animated' : ''}
        open={open}
      >
        <Close onClick={this.onClose} />
        <Message>{message}</Message>
        <Content>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(score => (
            <Button
              buttonColor={buttonColor}
              buttonHoveredColor={buttonHoveredColor}
              buttonScore={score}
              hoveredScore={hoveredScore}
              key={score}
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
