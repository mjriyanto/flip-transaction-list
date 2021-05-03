/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { formatCurrency, formatDate } from '../../utils/';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Button from '../../components/Button';
import '../index.scss';

const DetailTransaction = () => {
  const state = useSelector((state) => state.transaction);
  const history = useHistory();
  const [data, setData] = useState();
  let { id } = useParams();

  const getData = (value) => {
    let data = value.filter((val) => {
      return val.id === id;
    });
    return data;
  };

  const getBack = () => {
    history.push('/');
  }

  useEffect(() => {
    if (state.transactions.length > 0) {
      setData(getData(state.transactions));
    } else {
      getBack();
    }
  }, []);

  return (
    <>
      {data && (
        <div>
          <p className="header">Detail Transaksi</p>
          <Header id={data[0].id} status={data[0].status} />
          <Card
            sender_bank={data[0].sender_bank}
            beneficiary_bank={data[0].beneficiary_bank}
            account_number={data[0].account_number}
            beneficiary_name={data[0].beneficiary_name}
            amount={formatCurrency(data[0].amount)}
            unique_code={data[0].unique_code}
            remark={data[0].remark}
            created_at={formatDate(data[0].created_at)}
          />
          <Button getBack={getBack} />
        </div>
      )}
    </>
  );
};

export default DetailTransaction;
