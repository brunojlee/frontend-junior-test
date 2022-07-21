import React from 'react';
import WalletRowCard from '../WalletRowCard/WalletRowCard';
import './WalletCard.css';

export default function WalletCard() {
  const walletLS = JSON.parse(localStorage.getItem('wallet')) || [];

  return (
    <table className="walletCard">
      <tbody>
        <tr className="tableHeader">
          <th className="editColumn"> </th>
          <th className="tokenColumn">Tokens</th>
          <th className="balanceColumn">Balance</th>
        </tr>
        {
          walletLS.length > 0 && walletLS.map((wallet) => (
            <WalletRowCard token={wallet.token} balance={wallet.balance} />
          ))
        }
      </tbody>
    </table>
  );
}
