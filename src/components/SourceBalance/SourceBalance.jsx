import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './SourceBalance.module.css';

const SourceBalance = (props) => {
  return (
    <NavLink to="/FinanceList">
      <div className={classes.item} onClick={props.onClick}>
        <p className={classes.balanceTitle}>{props.title}</p>
        <p className={classes.balanceText}>{props.sum}</p>
        <div className={classes.endBlock}></div>
      </div>
    </NavLink>
  );
};

export default SourceBalance;
