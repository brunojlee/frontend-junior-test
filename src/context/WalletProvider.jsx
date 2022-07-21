import PropTypes from 'prop-types';

import React, { useMemo, useState } from 'react';
import WalletContext from './WalletContext';

function WalletProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [isButtonShow, setIsButtonShow] = useState({ display: 'none' });
  const [wallet, setWallet] = useState([]);
  const [selectedToken, setSelectedToken] = useState({});

  const context = useMemo(() => ({
    loading,
    setLoading,
    isButtonShow,
    setIsButtonShow,
    wallet,
    setWallet,
    selectedToken,
    setSelectedToken,
  }), [loading, isButtonShow, wallet, selectedToken]);

  return (

    <WalletContext.Provider value={context}>
      {children}
    </WalletContext.Provider>
  );
}

WalletProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default WalletProvider;
