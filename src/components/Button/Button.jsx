import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import WalletContext from '../../context/WalletContext';

import './Button.css';

function AddButton(props) {
  const { buttonStyles, buttonText } = props;
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

  const buttonStyle = {
    display: isButtonShow.display,
    ...buttonStyles,
  };

  return (
    <div className="addButtonContainer">
      <button
        className="addButton"
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
