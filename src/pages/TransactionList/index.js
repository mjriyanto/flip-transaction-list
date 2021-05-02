import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransaction, handleState } from '../../redux/transaction/action';

import Search from '../../components/Search';
import Filter from '../../components/Filter';
import Card from '../../components/Card';
import './index.scss';

const TransactionList = () => {
  const state = useSelector((state) => state.transaction);
  const dispatch = useDispatch();

  const onChange = (field, value) => {
    dispatch(handleState(field, value));
  };

  const formatCurrency = (value) => {
    let string = value.toString();
    let sisa = string.length % 3;
    let rupiah = string.substr(0, sisa);
    let ribuan = string.substr(sisa).match(/\d{3}/g);

    if (ribuan) {
      let separator = sisa ? '.' : '';
      return (rupiah += separator + ribuan.join('.'));
    }
  };

  const formatDate = (value) => {
    let string = value.toString();
    let date = string.split(' ')[0];
    let year = parseInt(date.split('-')[0]);
    let month = parseInt(date.split('-')[1] - 1);
    let day = parseInt(date.split('-')[2]);

    const months = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];

    let newDate = `${day.toString()} ${months[
      month
    ].toString()} ${year.toString()}`;
    return newDate;
  };

  const countTotal = (value) => {
    let total = 0;
    value.map((val) => {
      total += val.amount;
    });
    return total;
  };

  useEffect(() => {
    dispatch(fetchTransaction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p className="header">Daftar Transaksi</p>
      <p className="subheader">Halo kak!</p>
      <p className="text">
        Kamu telah melakukan transaksi sebesar{' '}
        <span className="currency">{`Rp${formatCurrency(
          countTotal(state.transactions)
        )}`}</span>{' '}
        sejak menggunakan Flip.
      </p>
      <div className="flex-container">
        <div className="search">
          <Search onChange={onChange} state={state} />
        </div>
        <div className="filter">
          <Filter />
        </div>
      </div>
      {state.transactions &&
        state.transactions.map((trf) => (
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
    </div>
  );
};

export default TransactionList;
