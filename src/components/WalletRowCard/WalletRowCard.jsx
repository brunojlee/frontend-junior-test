import PropTypes from 'prop-types';
import React from 'react';
import './WalletRowCard.css';
import { ReactComponent as EditIcon } from '../../assets/pencil-square.svg';

function WalletRowCard(props) {
  const { token, balance } = props;
  return (
    <tr key={token}>
      <td className="editColumn">
        <EditIcon />
      </td>
      <td className="tokenColumn">{token}</td>
      <td className="balanceColumn">{balance}</td>
    </tr>
  );
}

WalletRowCard.propTypes = {
  token: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
};

export default WalletRowCard;
