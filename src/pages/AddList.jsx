import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../components';

import BackBtnIcon from '../icons/back.png';

function AddList({ onClickItem }) {
  // Переменные для имени списка и баланса
  const [balance, setBalance] = useState(0);
  const [listName, setListName] = useState('list');

  return (
    <div className="container">
      <div className="header">
        <Link to="">
          <Button src={BackBtnIcon} alt="cancel button" />
          <span className="header-btn">отмена</span>
        </Link>

        <Link to="/">
          <span onClick={() => onClickItem(listName, balance)} className="header-btn">
            сохранить
          </span>
        </Link>
      </div>
      <div className="line"></div>
      <div className="list-name__block list-block">
        <input
          type="text"
          className="list-name__input add-list__input"
          placeholder="Имя списка"
          onChange={(e) => setListName(e.target.value)}
        />
        <span className="add-list__text">Укажите название списка для счета (Наличные, карта)</span>
      </div>
      <div className="start-balance__block list-block">
        <input
          type="text"
          className="start-balance__input add-list__input"
          placeholder="Начальный баланс"
          onChange={(e) => setBalance(+e.target.value)}
        />
        <span className="add-list__text">Укажите начальный баланс счета (Бюджет)</span>
      </div>
    </div>
  );
}

export default AddList;
