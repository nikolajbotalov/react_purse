import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Home.module.css';

import { SourceBalance } from '../index';

import addList from './images/addList.png';
import settings from './images/settings.png';

function Home(props) {
  let balanceInfoElements = props.sourceBalance.map((b, i) => (
    <SourceBalance
      key={i}
      id={b.id}
      title={b.balanceName}
      sum={b.currentBalance}
      onClick={() => {
        console.log(b.balanceName);
      }}
    />
  ));

  return (
    <div>
      <div className={classes.header}>
        <NavLink to="/AddLink">
          <img src={addList} alt="add list" className={classes.addListIcon} />
        </NavLink>
        <NavLink to="/Settings">
          <img src={settings} alt="settings" className={classes.settingsIcon} />
        </NavLink>
      </div>

      <div className={classes.balanceBlock}>
        <span>{props.currentBalance}</span>
      </div>
      <div className={classes.balanceList}>{balanceInfoElements}</div>
    </div>
  );
}

export default Home;
