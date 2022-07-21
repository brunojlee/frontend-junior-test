import React from 'react';
import './WalletCard.css';

export default function WalletCard() {
  return (
    <table className="walletCard">
      <tbody>
        <tr className="tableHeader">
          <th className="editColumn">Edit</th>
          <th>Tokens</th>
          <th>Balance</th>
        </tr>
      </tbody>
    </table>
  );
}
