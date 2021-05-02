import { combineReducers } from 'redux';
import transaction from './transaction/reducer';

const rootReducer = combineReducers({ transaction });

export default rootReducer;
