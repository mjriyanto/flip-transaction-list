import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 2px;
  line-height: 1.5em;
  margin-bottom: 20px;
  padding: 15px;

  .flex-header-container {
    display: flex;
    .icon {
      display: none;

      @media screen and (min-width: 480px) {
        display: inline-block;
        width: 15%;
        padding: 10px;
        text-align: center;

        i {
          font-size: 3em;
          color: #fd6542;
        }
      }
    }
    .detail {
      font-size: 13px;
      width: 85%;
      padding: 10px;
      .section {
        margin-bottom: 20px;
        line-height: 1.6em;
        .title {
          font-weight: 600;
          text-transform: uppercase;
        }
        .sender {
          text-transform: ${(props) =>
            props.upsender ? 'uppercase' : 'capitalize'};
        }
        .beneficiary {
          text-transform: ${(props) =>
            props.upbenef ? 'uppercase' : 'capitalize'};
        }
        .remark {
          text-transform: capitalize;
        }
      }
      @media screen and (min-width: 480px) {
        width: 100%;
        font-size: 15px;
      }
    }
  }
`;

const Card = ({
  sender_bank,
  beneficiary_bank,
  account_number,
  beneficiary_name,
  amount,
  unique_code,
  remark,
  created_at,
}) => {
  return (
    <StyledCard
      upsender={sender_bank.length < 6 ? true : false}
      upbenef={beneficiary_bank.length < 6 ? true : false}
    >
      <div className="flex-header-container">
        <div className="icon">
          <i className="fa fa-inbox"></i>
        </div>
        <div className="detail">
          <div className="section">
            <p className="title">Pengirim</p>
            <p className="sender">{sender_bank}</p>
          </div>
          <div className="section">
            <p className="title">Penerima</p>
            <p className="beneficiary">{beneficiary_bank}</p>
            <p>{account_number}</p>
            <p>{beneficiary_name}</p>
          </div>
          <div className="section">
            <p className="title">Nominal</p>
            <p>{`Rp${amount}`}</p>
            <p>
              <b>Kode Unik : </b>
              {unique_code}
            </p>
          </div>
          <div className="section">
            <p className="title">Catatan</p>
            <p className="remark">{remark}</p>
          </div>
          <div className="section">
            <p className="title">Waktu Dibuat</p>
            <p>{created_at}</p>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
