import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import WalletContext from '../../context/WalletContext';

import './AddButton.css';

export default function AddButton() {
  const navigate = useNavigate();
  const {
    setLoading,
    isButtonShow,
    setIsButtonShow,
  } = useContext(WalletContext);

  const handleClick = () => {
    setLoading(true);
    navigate('/AddToken');
    setIsButtonShow({ display: 'none' });
  };

  return (
    <div className="addButtonContainer">
      <button
        className="addButton"
        type="button"
        onClick={handleClick}
        style={isButtonShow}
      >
        Add Token
      </button>

    </div>
  );
}
