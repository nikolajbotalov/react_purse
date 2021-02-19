import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './AddList.module.css';
import backIcon from './images/back.png';
import {
  addNewBalanceListCreator,
  updateNewListNameCreator,
  updateNewListBalanceCreator,
} from '../../redux/state';

function AddList(props) {
  let state = props.store.getState().newListPage;

  // метод обновления названия фин.источника
  const onListNameChange = (e) => {
    let text = e.target.value;
    props.store.dispatch(updateNewListNameCreator(text));
  };

  // метод обновления баланса фин.источника
  const onListBalanceChange = (e) => {
    let text = e.target.value;
    props.store.dispatch(updateNewListBalanceCreator(text));
  };

  // метод сохранения нового лист фин.источника
  const addNewList = () => {
    const newBalanceList = {
      name: state.listNameText,
      balance: state.listBalanceText,
    };
    props.store.dispatch(addNewBalanceListCreator(newBalanceList.name, newBalanceList.balance));
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
          <span onClick={addNewList} className={classes.btnText}>
            сохранить
          </span>
        </NavLink>
        <div className={classes.endBlock}></div>
      </div>
      <div className={classes.addListContent}>
        <input
          type="text"
          placeholder="Имя списка"
          className={classes.listName}
          onChange={onListNameChange}
        />
        <span className={classes.listText}>
          Укажите название списка для счета (Наличные, карта)
        </span>
        <input
          type="text"
          placeholder="Начальный баланс"
          className={classes.listBalance}
          onChange={onListBalanceChange}
        />
        <span className={classes.balanceText}>Укажите начальный баланс счета (Бюджет)</span>
      </div>
    </div>
  );
}

export default AddList;
