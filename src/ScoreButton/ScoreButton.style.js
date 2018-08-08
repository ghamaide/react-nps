import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  background-color: ${props =>
    props.active
      ? props.innerStyle.button.backgroundActiveColor
      : props.innerStyle.button.backgroundColor};
  border: 5px solid
    ${props =>
      props.highlighted
        ? props.innerStyle.button.backgroundActiveColor
        : '#ffffff'};
  border-radius: 50%;
  color: ${props =>
    props.active
      ? props.innerStyle.button.textActiveColor
      : props.innerStyle.button.textColor};
  display: flex;
  height: 40px;
  justify-content: center;
  opacity: ${props => (props.active ? 1 : 0.5)};
  outline: none;
  padding: 5px;
  width: 40px;

  &:hover {
    cursor: pointer;
  }
`;
