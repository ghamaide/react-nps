import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

const getHeight = props =>
  props.innerStyle.innerHeight +
  2 * props.innerStyle.padding +
  props.innerStyle.border;

export const Style = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-top: ${props => props.innerStyle.border}px solid #dddddd;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  padding: ${props => props.innerStyle.padding}px;
  position: fixed;
  right: 0;

  &.container-enter-active {
    animation-duration: ${props => props.duration}s;
    animation-name: NPS-slidein;
  }

  &.container-enter-done {
    bottom: 0;
  }

  &.container-exit-active {
    animation-duration: ${props => props.duration}s;
    animation-name: NPS-slideout;
  }

  &.container-exit-done {
    bottom: -${props => getHeight(props)}px;
  }

  @keyframes NPS-slidein {
    from {
      bottom: -${props => getHeight(props)}px;
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
      bottom: -${props => getHeight(props)}px;
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
