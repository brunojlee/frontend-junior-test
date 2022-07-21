import PropTypes from 'prop-types';
import React from 'react';
import './WalletRowCard.css';
import { ReactComponent as EditIcon } from '../../assets/pencil-square.svg';

function WalletRowCard(props) {
  const { id, token, balance } = props;
  const handleClick = () => {
    global.alert(`${id}`);
  };
  return (
    <tr key={id}>
      <td className="editColumn">
        <EditIcon name={id} onClick={handleClick} />
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
