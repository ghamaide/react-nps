import React from 'react';

import { Button } from './ScoreButton.style';

import { DEFAULT_STYLE } from '../constants';

export default class ScoreButton extends React.Component {
  render() {
    const {
      buttonScore,
      buttonStyle,
      hoveredScore,
      onMouseEnter,
      onMouseLeave,
      onSubmit,
    } = this.props;

    const style = {
      ...DEFAULT_STYLE,
      button: {
        ...DEFAULT_STYLE.button,
        ...buttonStyle,
      },
    };

    return (
      <Button
        active={hoveredScore >= buttonScore}
        highlighted={hoveredScore === buttonScore}
        innerStyle={style}
        onClick={onSubmit(buttonScore)}
        onMouseEnter={onMouseEnter(buttonScore)}
        onMouseLeave={onMouseLeave}
      >
        {buttonScore}
      </Button>
    );
  }
}
