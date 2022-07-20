import React from 'react';
import WalletProvider from './context/WaleltProvider';
import Routes from './Routes';

function App() {
  return (
    <WalletProvider>
      <Routes />
    </WalletProvider>
  );
}

export default App;
