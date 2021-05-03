import styled from 'styled-components';
import flip from '../assets/flip.png';

const StyledLoader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 100px;
  }
`;

const Loader = () => {
  return (
    <StyledLoader>
      <img src={flip} alt="flip" />
    </StyledLoader>
  );
};

export default Loader;
