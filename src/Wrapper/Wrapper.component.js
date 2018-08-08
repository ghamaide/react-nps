import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import { DEFAULT_MESSAGE } from '../constants';
import Button from '../ScoreButton';

import { Close, Content, Message, Style } from './Wrapper.style';

export default class Wrapper extends React.Component<PropsType, StateType> {
  static defaultProps = {
    animated: true,
    animationDuration: 2,
    message: DEFAULT_MESSAGE,
    open: true,
  };

  constructor(props) {
    super(props);

    this.state = {
      hoveredScore: -1,
    };
  }

  onClose = event => {
    const { onClose } = this.props;

    if (onClose && typeof onClose === 'function') {
      onClose(event);
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
  };

  render() {
    const { animated, animationDuration, message, open, style } = this.props;

    const { hoveredScore } = this.state;

    const innerStyle = {
      border: 1,
      innerHeight: 100,
      padding: 10,
    };

    return (
      <CSSTransition
        appear
        classNames="container"
        in={open}
        mountOnEnter
        timeout={animated ? animationDuration * 1000 : 0}
        unmountOnExit
      >
        <Style
          className="container"
          duration={animationDuration}
          innerStyle={innerStyle}
        >
          <Close onClick={this.onClose} />
          <Message>{message}</Message>
          <Content>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(score => (
              <Button
                buttonStyle={style}
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
      </CSSTransition>
    );
  }
}
