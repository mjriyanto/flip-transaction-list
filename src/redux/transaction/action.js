import * as types from './constants';
import axios from 'axios';

export const fetchTransaction = () => {
  return (dispatch) => {
    dispatch(fetchTransactionRequest());
    axios
      .get('https://nextar.flip.id/frontend-test')
      .then((response) => {
        const transactions = Object.keys(response.data).map((key) => {
          return response.data[key];
        });
        dispatch(fetchTransactionSuccess(transactions));
      })
      .catch((error) => {
        dispatch(fetchTransactionFailure(error.message));
      });
  };
};

export const fetchTransactionRequest = () => {
  return {
    type: types.FETCH_TRANSACTION_LIST,
  };
};

export const fetchTransactionSuccess = (transactions) => {
  return {
    type: types.FETCH_TRANSACTION_LIST_SUCCESS,
    payload: transactions,
  };
};

export const fetchTransactionFailure = (error) => {
  return {
    type: types.FETCH_TRANSACTION_LIST_FAILURE,
    payload: error,
  };
};
