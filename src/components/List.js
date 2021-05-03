import styled from 'styled-components';

const StyledList = styled.div`
  background-color: #fff;
  border: none;
  border-left: ${(props) =>
    props.success ? '4px solid #56b586' : '4px solid #fd6542'};
  border-radius: 2px;
  cursor: pointer;
  font-size: 15px;
  line-height: 1.8em;
  margin-bottom: 15px;
  padding: 10px 25px;
  width: 100%;

  &:hover {
    transform: scale(1.1);
  }

  .flex-list-container {
    display: flex;
    .content {
      width: 75%;
      .bank {
        font-weight: 600;
        .sender {
          text-transform: ${(props) =>
            props.upsender ? 'uppercase' : 'capitalize'};
        }
        .benef {
          text-transform: ${(props) =>
            props.upbenef ? 'uppercase' : 'capitalize'};
        }
      }
      .name {
        text-transform: uppercase;
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

  @media screen and (max-width: 480px) {
    padding: 10px 15px;
    font-size: 13px;
  }
`;

const List = ({
  id,
  sender_bank,
  benef_bank,
  receiver,
  status,
  amount,
  date,
  onDetail,
}) => {
  if (id) {
    return (
      <StyledList
        success={status === 'SUCCESS' ? true : false}
        upsender={sender_bank.length < 6 ? true : false}
        upbenef={benef_bank.length < 6 ? true : false}
        onClick={() => onDetail(id)}
      >
        <div className="flex-list-container">
          <div className="content">
            <p className="bank">
              <span className="sender">{sender_bank}</span>&nbsp; &#8594; &nbsp;
              <span className="benef">{benef_bank}</span>
            </p>
            <p className="name">{receiver}</p>
            <p className="nominal">
              {`Rp${amount}`} &nbsp;&bull;&nbsp;{' '}
              <span className="date">{date}</span>
            </p>
          </div>
          <div className="status">
            <div className="tag">
              {status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'}
            </div>
          </div>
        </div>
      </StyledList>
    );
  } else return null;
};

export default List;
