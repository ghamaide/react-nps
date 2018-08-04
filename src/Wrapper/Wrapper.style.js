// @flow

import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

export const Style = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-top: 1px solid #dddddd;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  padding: 10px;
  position: fixed;
  right: 0;

  &.animated {
    animation-duration: ${props => props.animationDuration}s;
    animation-name: ${props => (props.open ? 'NPS-slidein' : 'NPS-slideout')};
  }

  @keyframes NPS-slidein {
    from {
      bottom: -100%;
    }

    to {
      bottom: 0;
    }
  }

  @keyframes NPS-slideout {
    from {
      bottom: 0;
    }

    to {
      bottom: -100%;
    }
  }
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
  right: 10px;
  top: 5px;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
