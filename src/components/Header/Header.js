import React from 'react'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import './Header.css'

export default function Header() {
  return (
    <div className="logoContainer" >
      <Logo />
    </div>
  )
}
