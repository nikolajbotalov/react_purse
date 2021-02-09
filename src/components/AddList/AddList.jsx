import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './AddList.module.css';

import backIcon from './images/back.png';

function AddList() {
  return (
    <div>
      <div className={classes.header}>
        <NavLink to="/">
          <div className={classes.backButton}>
            <img src={backIcon} alt="back" className={classes.backIcon} />
            <span className={classes.btnText}>отмена</span>
          </div>
        </NavLink>
        <span className={classes.btnText}>сохранить</span>
        <div className={classes.endBlock}></div>
      </div>
      <div className={classes.addListContent}>
        <input type="text" placeholder="Имя списка" className={classes.listName} />
        <span className={classes.listText}>
          Укажите название списка для счета (Наличные, карта)
        </span>
        <input type="text" placeholder="Начальный баланс" className={classes.listBalance} />
        <span className={classes.balanceText}>Укажите начальный баланс счета (Бюджет)</span>
      </div>
    </div>
  );
}

export default AddList;
