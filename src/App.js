import React from 'react';
import { Provider } from 'react-redux';
// To run project on local machine, switch from HashRouter to BrowserRouter.
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import store from './redux/store';

import TransactionList from './pages/TransactionList/';
import DetailTransaction from './pages/DetailTransaction/';
import NotFound from './pages/NotFound/';
import Container from './components/Container';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container>
          <Switch>
            <Route exact path="/" component={TransactionList} />
            <Route
              exact
              path="/transaction/:id"
              component={DetailTransaction}
            />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
