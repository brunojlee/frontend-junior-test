import React, { useMemo, useContext } from 'react';
import Header from '../../components/Header/Header';
import WalletCard from '../../components/WalletCard/WalletCard';
import WalletContext from '../../context/WalletContext';

import './Home.css';

export default function Home() {
  const {
    loading,
    setLoading,
    setIsButtonShow,
  } = useContext(WalletContext);

  useMemo(() => {
    if (loading) {
      setLoading(false);
    }
    setIsButtonShow({ display: 'flex' });
  }, []);
  return (
    <div className="homePage">
      <Header />
      <WalletCard />
    </div>
  );
}
