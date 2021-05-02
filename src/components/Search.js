import styled from 'styled-components';

const StyledSearch = styled.div`
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  i {
    position: absolute;
  }
  .icon {
    color: #e0e0e0;
    min-width: 30px;
    padding: 10px;
  }
  .input-field {
    border: none;
    color: #9e9e9e;
    font-size: 14px;
    padding: 10px 40px;
    width: 100%;
    &:focus {
      outline: none;
    }
    @media screen and (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

const Search = () => {
  return (
    <StyledSearch>
      <i className="fa fa-search icon"></i>
      <input
        className="input-field"
        type="text"
        placeholder="Cari nama atau bank"
      />
    </StyledSearch>
  );
};

export default Search;
