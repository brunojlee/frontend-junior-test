import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WalletContext from '../../context/WalletContext';
import Button from '../Button/Button';

import './EditTokenCard.css';

export default function EditTokenCard() {
  const {
    wallet, setWallet, selectedToken, setIsButtonShow,
  } = useContext(WalletContext);
  const [values, setValues] = useState({
    id: selectedToken.id || '',
    token: selectedToken.token || '',
    balance: selectedToken.balance || '',
  });
  const navigate = useNavigate();

  const buttonStyles1 = { color: 'var(--color-kle-50)', backgroundColor: 'var(--color-kle-300)' };
  const buttonStyles2 = { color: 'var(--color-kle-50)', backgroundColor: 'var(--color-kle-100)' };
  const buttonStyles3 = { color: 'var(--color-kle-50)', backgroundColor: 'var(--color-kle-200)' };

  useEffect(() => {
    setIsButtonShow({ display: 'none' });
  }, []);

  const handleValues = (value) => {
    if (value.target.name === 'token') {
      setValues((prevValues) => ({
        ...prevValues,
        id: selectedToken.id,
        [value.target.name]: value.target.value.toUpperCase(),
      }));
    } else {
      const balance = value.target.value
        .replace(/\D/g, '')
        .replace(/(\d)(\d{2})$/, '$1.$2')
        .replace(/(?=(\d{3})+(\D))\B/g, ',');
      setValues((prevValues) => ({
        ...prevValues,
        id: selectedToken.id,
        [value.target.name]: balance,
      }));
    }
  };

  const handleClick = async () => {
    if (wallet.find(
      (token) => token.token === values.token && values.token !== selectedToken.token,
    )) {
      global.alert('Token name already exists');
    } else if (values.token.length > 0 && values.balance.length > 0) {
      const newWallet = wallet.filter((item) => item.id !== selectedToken.id);
      localStorage.setItem('wallet', JSON.stringify([
        ...newWallet,
        values,
      ]));

      await setWallet(() => [
        ...newWallet,
        values,
      ]);
      navigate('/');
    } else {
      global.alert('Empty field');
    }
  };

  const removeToken = async () => {
    const resultado = global.confirm(`Are you sure you want to remove ${selectedToken.token}?`);
    if (resultado === true) {
      const newWallet = wallet.filter((item) => item.id !== selectedToken.id);
      localStorage.setItem('wallet', JSON.stringify(newWallet));
      await setWallet(newWallet);
      navigate('/');
    }
  };

  useEffect(() => {
    if (values.token === '') {
      navigate('/');
    }
  }, []);

  return (
    <div className="editTokenContainer">
      {
        values.token.length > 0
        && (
        <>
          <div className="editTokenCardHeader">
            <h3>Edit Token</h3>
            <Button buttonText="Back" buttonStyles={buttonStyles1} navigation="/" />
          </div>
          <div className="editTokenInput">
            Token
            <input type="text" name="token" value={values.token.toUpperCase()} onChange={handleValues} />
          </div>
          <div className="editBalanceInput">
            Balance
            <input type="text" name="balance" value={values.balance} onChange={handleValues} />
          </div>
          <div className="buttons">
            <div className="removeEditContainer">
              <Button buttonText="Remove" buttonStyles={buttonStyles3} navigation="/" onclick={removeToken} />
            </div>
            <div className="saveEditContainer">
              <Button buttonText="Save" buttonStyles={buttonStyles2} navigation="/" onclick={handleClick} />
            </div>
          </div>
        </>
        )
      }
    </div>
  );
}
