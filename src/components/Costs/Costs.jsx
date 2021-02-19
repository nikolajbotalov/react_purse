import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  updateNewCostsValueCreator,
  updateNewCostsDescCreator,
  addNewCostsCreator,
} from '../../redux/state';

import classes from './Costs.module.css';

const Costs = (props) => {
  // console.log(props);
  let state = props.store.getState().costsPage;

  const onChangeNewCostsValue = (e) => {
    let sumText = e.target.value;
    props.store.dispatch(updateNewCostsValueCreator(sumText));
  };

  const onChangeNewCostsDesc = (e) => {
    let descText = e.target.value;
    props.store.dispatch(updateNewCostsDescCreator(descText));
  };

  const addNewCosts = () => {
    const newCosts = {
      sum: state.costsValue,
      message: state.costsDesc,
    };
    props.store.dispatch(addNewCostsCreator(newCosts.sum, newCosts.message));
  };

  return (
    <div>
      <div className={classes.header}>
        <NavLink to="/FinanceList">
          <span>отмена</span>
        </NavLink>
        <NavLink to="/FinanceList">
          <span onClick={addNewCosts}>сохранить</span>
        </NavLink>
      </div>
      <div className={classes.content}>
        <div className={classes.balanceBlock}>
          <input type="text" onChange={onChangeNewCostsValue} placeholder="0" />
        </div>
        <div className={classes.item}>
          <span className={classes.title}>Описание</span>
          <input type="text" className={classes.text} onChange={onChangeNewCostsDesc} />
          <div className={classes.endBlock}></div>
        </div>
      </div>
    </div>
  );
};

export default Costs;
