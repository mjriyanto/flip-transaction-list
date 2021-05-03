import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchTransaction,
  handleState,
  filterByValue,
  sortByName,
} from '../../redux/transaction/action';
import { useHistory } from 'react-router-dom';
import { formatCurrency, formatDate, countTotal } from '../../utils/';

import Search from '../../components/Search';
import Filter from '../../components/Filter';
import List from '../../components/List';
import Loader from '../../components/Loader';
import '../index.scss';

const TransactionList = () => {
  const state = useSelector((state) => state.transaction);
  const dispatch = useDispatch();
  const history = useHistory();

  const onChange = (field, value) => {
    dispatch(handleState(field, value));
    dispatch(filterByValue(value));
  };

  const onSelect = (value) => {
    dispatch(sortByName(value));
  };

  const onDetail = (value) => {
    history.push(`transaction/${value}`);
  };

  useEffect(() => {
    dispatch(fetchTransaction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {state && !state.loading ? (
        <div>
          <div>
            <p className="header">Daftar Transaksi</p>
            <p className="subheader">Halo kak!</p>
            <p className="text">
              Kamu telah melakukan transaksi sebesar{' '}
              <span className="currency">{`Rp${
                countTotal(state.filteredTransactions)
                  ? formatCurrency(countTotal(state.filteredTransactions))
                  : 0
              }`}</span>{' '}
              sejak menggunakan Flip.
            </p>
          </div>
          <div className="flex-search-container">
            <div className="search">
              <Search onChange={onChange} state={state} />
            </div>
            <div className="filter">
              <Filter onSelect={onSelect} />
            </div>
          </div>
          {state.filteredTransactions &&
            state.filteredTransactions.map((trf) => (
              <List
                key={trf.id}
                id={trf.id}
                sender_bank={trf.sender_bank}
                benef_bank={trf.beneficiary_bank}
                receiver={trf.beneficiary_name}
                status={trf.status}
                onDetail={onDetail}
                amount={formatCurrency(trf.amount)}
                date={formatDate(trf.completed_at)}
                success
              />
            ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default TransactionList;
