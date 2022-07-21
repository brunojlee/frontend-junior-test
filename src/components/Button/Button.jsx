import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import WalletContext from '../../context/WalletContext';

import './Button.css';

function Button(props) {
  const {
    buttonStyles, buttonText, navigation, onclick,
  } = props;
  const navigate = useNavigate();
  const {
    setLoading,
    isButtonShow,
    setIsButtonShow,
  } = useContext(WalletContext);

  const handleClick = () => {
    setLoading(true);
    setIsButtonShow({ display: 'none' });
    if (navigation) {
      navigate(navigation);
    }
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
        onClick={onclick || handleClick}
        style={buttonStyle}
      >
        { buttonText }

      </button>
    </div>
  );
}

Button.propTypes = {
  buttonStyles: PropTypes.object,
  buttonText: PropTypes.string,
}.isRequired;

export default Button;
