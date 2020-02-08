import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  background: rgba(0, 0, 0, 0.5) none repeat scroll 0% 0%;
  opacity: 0;

  ${({ visible }) =>
    visible &&
    `
    transition: opacity 0.3s ease 0s;
    z-index: 1 !important;
    opacity: 1 !important;
    cursor: pointer;
  `}
`;

export default Overlay;
