import React from 'react';
import Button from '../Button/Button';
import './AddTokenCard.css';

export default function AddTokenCard() {
  const buttonStyles1 = { color: 'var(--color-kle-50)', backgroundColor: 'var(--color-kle-300)' };
  const buttonStyles2 = { color: 'var(--color-kle-50)', backgroundColor: 'var(--color-kle-100)' };

  return (
    <div className="addTokenContainer">
      <div className="addTokenCardHeader">
        <h3>Add Token</h3>
        <Button buttonText="Voltar" buttonStyles={buttonStyles1} navigation="/" />
      </div>
      <div className="addTokenInput">
        Token
        <input type="text" />
      </div>
      <div className="addBalanceInput">
        Balance
        <input type="text" />
      </div>
      <div className="saveButtonContainer">
        <Button buttonText="Save" buttonStyles={buttonStyles2} navigation="/" />
      </div>
    </div>
  );
}
