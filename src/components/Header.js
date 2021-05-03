import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: #fff;
  border-radius: 2px;
  margin-bottom: 15px;
  padding: 15px;
  line-height: 1.5em;

  .flex-header-container {
    display: flex;
    .id {
      align-self: center;
      width: 75%;
      p {
        font-weight: 600;
      }
    }
    .status {
      width: 25%;
      align-self: center;
      text-align: center;
      .tag {
        background-color: ${(props) => (props.success ? '#56b586' : '#fff')};
        border: ${(props) => (props.success ? '1px solid #56b586' : '1px solid #fd6542')};
        border-radius: 5px;
        color: ${(props) => (props.success ? '#fff' : '#222')};
        font-size: 12px;
        padding: 0 3px;

        @media screen and (min-width: 480px) {
          font-size: 14px;
          width: 80%;
        }
      }
    }
  }

  @media screen and (min-width: 480px) {
    line-height: 1.8em;
  }
`;

const Header = ({ id, status }) => {
  return (
    <StyledHeader success={status === 'SUCCESS' ? true : false}>
      <div className="flex-header-container">
        <div className="id">
          <p>{`ID TRANSAKSI: #${id}`}</p>
        </div>
        <div className="status">
          <div className="tag">
            {status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'}
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
