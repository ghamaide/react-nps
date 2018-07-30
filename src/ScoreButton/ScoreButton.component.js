// @flow

import React from 'react';

import { Button } from './ScoreButton.style';

type PropsType = {
  buttonScore: number,
  hoveredScore: number,
  onMouseEnter: number => void,
  onMouseLeave: void => void,
  onSubmit: number => void,
};

export default class ScoreButton extends React.Component<PropsType> {
  render() {
    const {
      buttonScore,
      hoveredScore,
      onMouseEnter,
      onMouseLeave,
      onSubmit,
    } = this.props;

    return (
      <Button
        active={hoveredScore >= buttonScore}
        highlighted={hoveredScore === buttonScore}
        onClick={onSubmit(buttonScore)}
        onMouseEnter={onMouseEnter(buttonScore)}
        onMouseLeave={onMouseLeave}
      >
        {buttonScore}
      </Button>
    );
  }
}
