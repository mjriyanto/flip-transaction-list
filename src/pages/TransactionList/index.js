import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransaction } from '../../redux/transaction/action';

const TransactionList = () => {
  const state = useSelector((state) => state.transaction);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransaction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <p>Test</p>
      {state.transactions.map((data) => (
        <p key={data.id}>{data.beneficiary_name}</p>
      ))}
    </>
  );
};

export default TransactionList;
