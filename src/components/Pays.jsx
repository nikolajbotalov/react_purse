import React from 'react';

function Pays(props) {
  return (
    <div className="pay-block">
      <span className="pay-name">{props.payName}</span>
      <span className="pay-balance">{props.payBalance}</span>
      <div className="pay-line"></div>
    </div>
  );
}

export default Pays;
