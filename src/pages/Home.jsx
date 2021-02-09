import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Pays } from '../components';

import AddListIcon from '../icons/addList.png';
import SettingsIcon from '../icons/settings.png';

function Home() {
  return (
    <div className="container">
      <div className="header">
        <Link to="/AddList">
          <Button src={AddListIcon} alt="add list" />
        </Link>
        <Link to="/Settings">
          <Button src={SettingsIcon} alt="settings" />
        </Link>
      </div>
      <div className="balance-block">
        <span className="current-balance">0.00</span>
      </div>
      <div className="pays-list">
        <Pays payName="ВТБ" payBalance="34620.65" />
      </div>
    </div>
  );
}

export default Home;
