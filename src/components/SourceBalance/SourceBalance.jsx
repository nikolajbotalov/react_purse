import React from 'react';
import classes from './SourceBalance.module.css';

const SourceBalance = (props) => {
  return (
    <div className={classes.item}>
      <p className={classes.balanceTitle}>{props.title}</p>
      <p className={classes.balanceText}>{props.sum}</p>
      <div className={classes.endBlock}></div>
    </div>
  );
};

export default SourceBalance;
