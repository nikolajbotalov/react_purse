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
      <Route path="/AddLink" render={() => <AddLink addBalanceList={props.addBalanceList} />} />
      <Route
        path="/FinanceList"
        render={() => (
          <FinanceList
            currentBalance={props.state.balance}
            financeInfo={props.state.financePage.financeInfo}
          />
        )}
      />
      <Route path="/Costs" render={() => <Costs currentBalance={props.state.balance} />} />
    </div>
  );
}

export default App;
