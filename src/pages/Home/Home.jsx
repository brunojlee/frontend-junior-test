import React from 'react';
import Header from '../../components/Header/Header';
import WalletCard from '../../components/WalletCard/WalletCard';
import './Home.css';

export default function Home() {
  return (
    <div className="homePage">
      <Header />
      <WalletCard />
    </div>
  );
}
