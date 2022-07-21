import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import WalletContext from '../../context/WalletContext';

import './Button.css';

function AddButton(props) {
  const { buttonStyles, buttonText, navigation } = props;
  const navigate = useNavigate();
  const {
    setLoading,
    isButtonShow,
    setIsButtonShow,
  } = useContext(WalletContext);

  const handleClick = () => {
    setLoading(true);
    navigate(navigation);
    setIsButtonShow({ display: 'none' });
  };

  const buttonCheck = buttonText === 'Add Token' ? isButtonShow.display : { display: 'flex' };
  const buttonStyle = {
    display: buttonCheck,
    ...buttonStyles,
  };

  return (
    <div className="buttonContainer">
      <button
        className="button"
        type="button"
        onClick={handleClick}
        style={buttonStyle}
      >
        { buttonText }

      </button>
    </div>
  );
}

AddButton.propTypes = {
  buttonStyles: PropTypes.object,
  buttonText: PropTypes.string,
}.isRequired;

export default AddButton;
