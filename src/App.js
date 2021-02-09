import React from 'react';
import { Route } from 'react-router-dom';
import classes from './App.module.css';

import { Home, AddLink } from './components/index';

function App(props) {
  return (
    <div className={classes.appWrapper}>
      <Route
        exact
        path="/"
        render={() => <Home sourceBalance={props.state.mainPage.sourceBalance} />}
      />
      <Route path="/AddLink" render={() => <AddLink />} />
    </div>
  );
}

export default App;
