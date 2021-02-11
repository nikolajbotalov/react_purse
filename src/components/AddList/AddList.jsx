import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './AddList.module.css';

import backIcon from './images/back.png';

function AddList(props) {
  let newListElement = React.createRef();
  let newBalanceElement = React.createRef();

  let addListHandler = () => {
    let text = {
      listName: newListElement.current.value,
      balance: newBalanceElement.current.value,
    };
    props.addBalanceList(text);
  };

  return (
    <div>
      <div className={classes.header}>
        <NavLink to="/">
          <div className={classes.backButton}>
            <img src={backIcon} alt="back" className={classes.backIcon} />
            <span className={classes.btnText}>отмена</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <span onClick={addListHandler} className={classes.btnText}>
            сохранить
          </span>
        </NavLink>
        <div className={classes.endBlock}></div>
      </div>
      <div className={classes.addListContent}>
        <input
          type="text"
          ref={newListElement}
          placeholder="Имя списка"
          className={classes.listName}
        />
        <span className={classes.listText}>
          Укажите название списка для счета (Наличные, карта)
        </span>
        <input
          type="text"
          ref={newBalanceElement}
          placeholder="Начальный баланс"
          className={classes.listBalance}
        />
        <span className={classes.balanceText}>Укажите начальный баланс счета (Бюджет)</span>
      </div>
    </div>
  );
}

export default AddList;
