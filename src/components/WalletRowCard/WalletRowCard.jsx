import PropTypes from 'prop-types';
import React from 'react';
import './WalletRowCard.css';

function WalletRowCard(props) {
  const { token, balance } = props;
  return (
    <tr key={token}>
      <td>EditIcon</td>
      <td>{token}</td>
      <td>{balance}</td>
    </tr>
  );
}

WalletRowCard.propTypes = {
  token: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
};

export default WalletRowCard;
