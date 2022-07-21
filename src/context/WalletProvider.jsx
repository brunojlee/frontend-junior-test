import PropTypes from 'prop-types';

import React, { useMemo, useState } from 'react';
import WalletContext from './WalletContext';

function WalletProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [isButtonShow, setIsButtonShow] = useState({ display: 'flex' });
  const [wallet, setWallet] = useState([]);

  const context = useMemo(() => ({
    loading,
    setLoading,
    isButtonShow,
    setIsButtonShow,
    wallet,
    setWallet,
  }), [loading, isButtonShow, wallet]);

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
