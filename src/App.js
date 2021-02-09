import React from 'react';

import './scss/app.scss';
import { Home, AddList, Settings } from './pages';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/AddList">
        <AddList onClickItem={(...props) => console.log(...props)} />
      </Route>
      <Route exact path="/Settings" component={Settings} />
    </div>
  );
}

export default App;
