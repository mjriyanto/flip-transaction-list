import styled from 'styled-components';

const StyledSearch = styled.div`
  width: 100%;
  border: 1px solid #e0e0e0;
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

const Search = ({ onChange, state }) => {
  return (
    <StyledSearch>
      <i className="fa fa-search icon"></i>
      <input
        type="text"
        value={state.search}
        className="input-field"
        placeholder="Cari nama atau bank"
        onChange={(e) => onChange('search', e.target.value)}
      />
    </StyledSearch>
  );
};

export default Search;
