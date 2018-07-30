// @flow

import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

export const Style = styled.div`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px;
  padding: 10px;
`;

export const Message = styled.div`
  margin-top: 10px;
  text-align: center;
  width: 100%;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 50px;
  justify-content: center;
  margin-top: 10px;
  padding: 5px;
`;

export const Close = styled(CloseIcon)`
  opacity: 0.5;
  padding: 5px;
  position: absolute;
  right: 20px;
  top: 15px;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
