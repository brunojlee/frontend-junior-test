import React, { useContext, useEffect } from 'react';
import WalletContext from '../../context/WalletContext';
import WalletRowCard from '../WalletRowCard/WalletRowCard';
import './WalletCard.css';

export default function WalletCard() {
  const { setSelectedToken, setWallet } = useContext(WalletContext);

  const walletLS = JSON.parse(localStorage.getItem('wallet')) || [];
  useEffect(() => {
    setSelectedToken(null);
    setWallet(walletLS);
  }, []);

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
            <WalletRowCard id={wallet.id} token={wallet.token} balance={wallet.balance} />
          ))
        }
      </tbody>
    </table>
  );
}
