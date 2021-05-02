import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransaction } from '../../redux/transaction/action';
import styled from 'styled-components';

import Search from '../../components/Search';
import Filter from '../../components/Filter';

const TransactionList = () => {
  const state = useSelector((state) => state.transaction);
  const dispatch = useDispatch();

  const StyledTransactionList = styled.div`
    .header {
      text-align: center;
      font-size: 35px;
      font-weight: 300;
      margin-bottom: 30px;
    }
    .subheader {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .text {
      font-size: 13px;
      line-height: 1.5em;
      margin-bottom: 15px;
    }
    .currency {
      color: #fd6542;
      font-weight: 700;
    }
  `;

  useEffect(() => {
    dispatch(fetchTransaction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledTransactionList>
      <div>
        <p className="header">Daftar Transaksi</p>
        <p className="subheader">Halo kak!</p>
        <p className="text">
          Kamu telah melakukan transaksi sebesar{' '}
          <span className="currency">Rp5.000.000</span> sejak menggunakan Flip.
        </p>
        <Search />
        <Filter />
      </div>
    </StyledTransactionList>
  );
};

export default TransactionList;
