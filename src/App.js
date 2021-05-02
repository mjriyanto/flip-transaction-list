import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import TransactionList from './pages/TransactionList/'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <TransactionList />
    </Provider>
  );
}

export default App;
