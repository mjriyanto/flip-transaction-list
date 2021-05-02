/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';

const StyledFilter = styled.div`
  position: relative;
  display: inline-block;
  .dropbtn {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    color: #000000;
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px;
    .arrow {
      color: #fd6542;
    }
    @media screen and (max-width: 480px) {
      font-size: 12px;
    }
  }
  .dropdown-content {
    background-color: #fff;
    display: none;
    font-size: 13px;
    min-width: 160px;
    position: absolute;
    z-index: 1;
    a {
      color: #000;
      padding: 10px;
      text-decoration: none;
      display: block;
      &:hover {
        background-color: rgba(253, 101, 66, 0.1);
      }
    }
    @media screen and (max-width: 480px) {
      font-size: 12px;
    }
  }
  &:hover {
    .dropdown-content {
      display: block;
    }
    .dropbtn {
      background-color: #fff;
    }
  }
`;

const Filter = ({ onSelect }) => {
  return (
    <StyledFilter>
      <button className="dropbtn">
        Urutkan&emsp;<span className="arrow">&#10597;</span>
      </button>
      <div className="dropdown-content">
        <a href="#" onClick={() => onSelect('asc')}>
          Nama A-Z
        </a>
        <a href="#" onClick={() => onSelect('desc')}>
          Nama Z-A
        </a>
        <a href="#">Tanggal terbaru</a>
        <a href="#">Tanggal terlama</a>
      </div>
    </StyledFilter>
  );
};

export default Filter;
