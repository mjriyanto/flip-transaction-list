import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './redux/store';

import TransactionList from './pages/TransactionList/';
import Container from './components/Container';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container>
          <TransactionList />
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
