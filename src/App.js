import React from 'react';
import { Route } from 'react-router-dom';
import classes from './App.module.css';

import { Home, AddLink, FinanceList, Costs } from './components/index';

function App(props) {
  return (
    <div className={classes.appWrapper}>
      <Route
        exact
        path="/"
        render={() => (
          <Home
            currentBalance={props.state.balance}
            sourceBalance={props.state.mainPage.sourceBalance}
          />
        )}
      />
      <Route
        path="/AddLink"
        render={() => (
          <AddLink
            addBalanceList={props.addBalanceList}
            dispatch={props.dispatch}
            store={props.store}
          />
        )}
      />
      <Route
        path="/FinanceList"
        render={() => (
          <FinanceList financeInfo={props.state.financePage.financeInfo} store={props.store} />
        )}
      />
      <Route path="/Costs" render={() => <Costs dispatch={props.dispatch} store={props.store} />} />
    </div>
  );
}

export default App;
