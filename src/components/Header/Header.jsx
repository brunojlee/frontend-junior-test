import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Star } from '../../assets/shooting-star.svg';
import Button from '../Button/Button';
import './Header.css';

export default function Header() {
  const buttonStyles = { color: 'var(--color-kle-50)', backgroundColor: 'var(--color-kle-100)' };

  return (
    <div className="headerContainer">
      <Logo className="logo" />
      <div className="lowHeaderContainer">
        <div className="starContainer">
          <Star className="star" />
          <div className="title">Wish Wallet</div>
        </div>
        <Button buttonText="Add Token" buttonStyles={buttonStyles} />
      </div>
    </div>
  );
}
