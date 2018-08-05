// @flow

import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  background-color: ${props =>
    props.active ? props.buttonHoveredColor : props.buttonColor};
  border: 5px solid
    ${props => (props.highlighted ? props.buttonHoveredColor : '#ffffff')};
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
    background-color: ${props => props.buttonHoveredColor};
    cursor: pointer;
  }
`;
