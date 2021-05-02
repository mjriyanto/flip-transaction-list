import * as types from './constants';

const initialState = {
  loading: false,
  transactions: [],
  error: '',
  search: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_STATE_TRANSACTION_LIST:
      return {
        ...state,
        [action.field]: action.value,
      };
    case types.FETCH_TRANSACTION_LIST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_TRANSACTION_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
        error: '',
      };
    case types.FETCH_TRANSACTION_LIST_FAILURE:
      return {
        ...state,
        transactions: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
