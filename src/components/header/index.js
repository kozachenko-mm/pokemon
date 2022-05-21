import React from 'react';
import Logo from '../../assets/images/free-png.ru-740-450x200.png';

export const Header = () => {
  return (
    <header className="header">
      <img className="img" src={Logo} alt="logo" width="112.5px" height="50px" />
    </header>
  );
};
