import styled from 'styled-components';

const StyledButton = styled.button`
  background: none;
  border: 1px solid #fd6542;
  border-radius: 5px;
  cursor: pointer;
  color: #fd6542;
  padding: 8px 15px;

  &:hover {
    background: #fd6542;
    color: #fff;
  }
`;

const Button = ({ getBack }) => {
  return <StyledButton onClick={() => getBack()}>Kembali</StyledButton>;
};

export default Button;
