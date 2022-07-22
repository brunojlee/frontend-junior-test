import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as EditIcon } from '../../assets/pencil-square.svg';
import WalletContext from '../../context/WalletContext';
import './WalletRowCard.css';

function WalletRowCard(props) {
  const { id, token, balance } = props;
  const { setSelectedToken } = useContext(WalletContext);
  const navigate = useNavigate();

  const handleClick = async () => {
    await setSelectedToken({ id, token, balance });
    navigate('/EditToken');
  };
  return (
    <tr key={id}>
      <td className="editColumn">
        <EditIcon data-testid="edit-icon" name={id} onClick={handleClick} />
      </td>
      <td className="tokenColumn">{token}</td>
      <td className="balanceColumn">{balance}</td>
    </tr>
  );
}

WalletRowCard.propTypes = {
  id: PropTypes.number.isRequired,
  token: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
};

export default WalletRowCard;
