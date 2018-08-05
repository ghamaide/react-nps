// @flow

import React from 'react';

import { DEFAULT_MESSAGE } from '../constants';
import Button from '../ScoreButton';

import { Close, Content, Message, Style } from './Wrapper.style';

type PropsType = {
  animated?: boolean,
  animationDuration?: number,
  buttonColor?: string,
  buttonHoveredColor?: string,
  message?: string,
  open?: boolean,
  onClose?: void => void,
  onSubmit?: (?number) => void,
};

export default class Wrapper extends React.Component<PropsType, StateType> {
  static defaultProps = {
    animated: true,
    animationDuration: 2,
    message: DEFAULT_MESSAGE,
    open: true,
    onClose: () => {},
    onSubmit: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      hoveredScore: -1,
      open: props.open,
      visible: true,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open && this.props.open) {
      this.open();
    }

    if (prevProps.open !== this.props.open && !this.props.open) {
      this.close();
    }
  }

  close = () => {
    const { animated, animationDuration, onClose } = this.props;

    this.setState({ visible: false });

    if (animated) {
      setTimeout(() => {
        this.setState({ open: false });
      }, animationDuration * 1000);
    } else {
      this.setState({ open: false });
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
    this.close();
  };

  open = () => {
    const { onOpen } = this.props;
    this.setState({ open: true, visible: true });

    if (onOpen && typeof onOpen === 'function') {
      onOpen();
    }
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

    if (!open) {
      return null;
    }

    return (
      <Style
        animationDuration={animationDuration}
        className={animated ? 'animated' : ''}
        visible={visible}
      >
        <Close onClick={this.close} />
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
