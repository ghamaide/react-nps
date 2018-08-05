// @flow

import React from 'react';

import { Button } from './ScoreButton.style';

const DARK_BLUE = '#2196f3';
const LIGHT_BLUE = '#c2eafc';

type PropsType = {
  buttonColor?: string,
  buttonHoveredColor?: string,
  buttonScore: number,
  hoveredScore: number,
  onMouseEnter: number => void,
  onMouseLeave: void => void,
  onSubmit: number => void,
};

export default class ScoreButton extends React.Component<PropsType> {
  static defaultProps = {
    buttonColor: LIGHT_BLUE,
    buttonHoveredColor: DARK_BLUE,
  };

  render() {
    const {
      buttonScore,
      buttonColor,
      buttonHoveredColor,
      hoveredScore,
      onMouseEnter,
      onMouseLeave,
      onSubmit,
    } = this.props;

    return (
      <Button
        active={hoveredScore >= buttonScore}
        buttonColor={buttonColor}
        buttonHoveredColor={buttonHoveredColor}
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
