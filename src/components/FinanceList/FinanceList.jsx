import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './FinanceList.module.css';

import backIcon from '../../icons/back.png';
import costsIcon from '../../icons/costs.png';
import incomeIcon from '../../icons/income.png';

import { SourceBalance } from '../index';

function FinanceList(props) {
  let costsIncomeElements = props.financeInfo.map((c, i) => (
    <SourceBalance key={i} id={c.id} title={c.message} sum={c.sum} />
  ));

  return (
    <div>
      <div className={classes.header}>
        <NavLink to="/">
          <div className={classes.backBtn}>
            <img src={backIcon} alt="back btn" className={classes.backButton} />
            <span className={classes.btnText}>назад</span>
          </div>
        </NavLink>
      </div>
      <div className={classes.content}>
        <div className={classes.balanceBlock}>
          <NavLink to="/Costs">
            <button className={classes.costsBtn}>
              <img src={costsIcon} alt="costs img" />
            </button>
          </NavLink>
          <span className={classes.balanceText}>{props.currentBalance}</span>
          <button className={classes.incomeBtn}>
            <img src={incomeIcon} alt="income img" />
          </button>
        </div>
        <div className={classes.CostsIncomeBlock}>{costsIncomeElements}</div>
      </div>
    </div>
  );
}

export default FinanceList;
