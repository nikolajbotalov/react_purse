import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './App';
import state, { addBalanceList } from './redux/state';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} addBalanceList={addBalanceList} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
