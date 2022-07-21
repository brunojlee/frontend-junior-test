import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import WalletContext from '../../context/WalletContext';

import './AddTokenCard.css';

export default function AddTokenCard() {
  const { wallet, setWallet } = useContext(WalletContext);
  const [values, setValues] = useState({ id: 0, token: '', balance: '' });
  const [lastId, setLastId] = useState();
  const navigate = useNavigate();

  const buttonStyles1 = { color: 'var(--color-kle-50)', backgroundColor: 'var(--color-kle-300)' };
  const buttonStyles2 = { color: 'var(--color-kle-50)', backgroundColor: 'var(--color-kle-100)' };

  useEffect(() => {
    const walletLS = localStorage.getItem('wallet');
    if (walletLS) {
      setWallet(JSON.parse(walletLS));
      setLastId(JSON.parse(walletLS).length);
    } else {
      setLastId(0);
    }
  }, []);

  const handleValues = (value) => {
    const id = lastId + 1;
    setValues((prevValues) => ({
      ...prevValues,
      id,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClick = () => {
    if (values.token.length > 0 && values.balance.length > 0) {
      setWallet((prevTokenList) => [
        ...prevTokenList,
        values,
      ]);
      setLastId((prevLastId) => prevLastId + 1);
      navigate('/');
    } else {
      global.alert('Campos vazios');
    }
  };

  useEffect(() => {
    localStorage.setItem('wallet', JSON.stringify(wallet));
  }, [wallet]);

  return (
    <div className="addTokenContainer">
      <div className="addTokenCardHeader">
        <h3>Add Token</h3>
        <Button buttonText="Voltar" buttonStyles={buttonStyles1} navigation="/" />
      </div>
      <div className="addTokenInput">
        Token
        <input type="text" name="token" value={values.token} onChange={handleValues} />
      </div>
      <div className="addBalanceInput">
        Balance
        <input type="text" name="balance" value={values.balance} onChange={handleValues} />
      </div>
      <div className="saveButtonContainer">
        <Button buttonText="Save" buttonStyles={buttonStyles2} navigation="/" onclick={handleClick} />
        {/* <button type="button" onClick={handleClick}> save </button> */}
      </div>
    </div>
  );
}
