import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchTransaction,
  handleState,
  filterByValue,
  sortByName,
} from '../../redux/transaction/action';
import { formatCurrency, formatDate, countTotal } from '../../utils/';

import Search from '../../components/Search';
import Filter from '../../components/Filter';
import Card from '../../components/Card';
import './index.scss';

const TransactionList = () => {
  const state = useSelector((state) => state.transaction);
  const dispatch = useDispatch();

  const onChange = (field, value) => {
    dispatch(handleState(field, value));
    dispatch(filterByValue(value));
  };

  const onSelect = (value) => {
    dispatch(sortByName(value));
  };

  useEffect(() => {
    dispatch(fetchTransaction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <p className="header">Daftar Transaksi</p>
        <p className="subheader">Halo kak!</p>
        <p className="text">
          Kamu telah melakukan transaksi sebesar{' '}
          <span className="currency">{`Rp${
            countTotal(state.transactions)
              ? formatCurrency(countTotal(state.transactions))
              : 0
          }`}</span>{' '}
          sejak menggunakan Flip.
        </p>
      </div>
      <div className="flex-container">
        <div className="search">
          <Search onChange={onChange} state={state} />
        </div>
        <div className="filter">
          <Filter onSelect={onSelect} />
        </div>
      </div>
      {state.filteredTransactions &&
        state.filteredTransactions.map((trf) => (
          <Card
            key={trf.id}
            id={trf.id}
            sender_bank={trf.sender_bank}
            benef_bank={trf.beneficiary_bank}
            receiver={trf.beneficiary_name}
            status={trf.status}
            amount={formatCurrency(trf.amount)}
            date={formatDate(trf.completed_at)}
            success
          />
        ))}
      <Card />
    </>
  );
};

export default TransactionList;
