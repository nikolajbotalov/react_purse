// Провести рефакторинг, компоненты Costs и Income визуально одинаковые,
// Разница лишь в цвете бэкграунда balanceBlock.
// В проспы передавать цвет бэкграунда и для balanceBlock
// передать цвет в параметре style={}

import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Costs.module.css';

const Costs = (props) => {
  return (
    <div>
      <div className={classes.header}>
        <NavLink to="/FinanceList">
          <span>отмена</span>
        </NavLink>
        <NavLink to="/FinanceList">
          <span>сохранить</span>
        </NavLink>
      </div>
      <div className={classes.content}>
        <div className={classes.balanceBlock}>
          <span>{props.currentBalance}</span>
        </div>
        <div className={classes.item}>
          <span className={classes.title}>Описание</span>
          <input type="text" className={classes.text} />
          <div className={classes.endBlock}></div>
        </div>
      </div>
    </div>
  );
};

export default Costs;
