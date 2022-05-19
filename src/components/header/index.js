import React from 'react';
import Logo from '../../assets/images/free-png.ru-740-450x200.png';

export const Header = () => {
  return (
    <header className="header">
      <div className="imgBox">
        <img src={Logo} alt="logo" />
      </div>
    </header>
  );
};
