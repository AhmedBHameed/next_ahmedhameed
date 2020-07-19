import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  transition: transform 0.2s ease-out;
  transform: translateX(0);
  &.openMenu {
    transform: translateX(32rem);
  }
`;

export {Wrapper};
