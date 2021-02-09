import React from 'react';
import classes from './SourceBalance.module.css';

function SourseBalanse(props) {
  return (
    <div className={classes.item}>
      <p className={classes.balanceTitle}>{props.balanceName}</p>
      <p className={classes.balanceText}>{props.currentBalance}</p>
      <div className={classes.endBlock}></div>
    </div>
  );
}

export default SourseBalanse;
