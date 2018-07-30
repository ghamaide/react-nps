// @flow

import styled from 'styled-components';

const DARK_BLUE = '#2196f3';
const LIGHT_BLUE = '#c2eafc';

export const Button = styled.button`
  align-items: center;
  background-color: ${props => (props.active ? DARK_BLUE : LIGHT_BLUE)};
  border: 5px solid ${props => (props.highlighted ? DARK_BLUE : '#ffffff')};
  border-radius: 50%;
  color: ${props => (props.active ? 'white' : 'black')};
  display: flex;
  height: 40px;
  justify-content: center;
  opacity: ${props => (props.active ? 1 : 0.5)};
  outline: none;
  padding: 5px;
  width: 40px;

  &:hover {
    background-color: ${DARK_BLUE};
    cursor: pointer;
  }
`;
