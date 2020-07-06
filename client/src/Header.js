import React from 'react';
import './Header.css'
function Header() {
  return (
    <div className="header">
      <div className="logo-section">
        mcqDB
      </div>
      <div className="links-section">
        <ul>
          <li><a href="/contests">contests</a></li>
          <li><a href="/about">about us</a></li>
          <li><a href="/enter">login/signup</a></li>
        </ul>
      </div>
    </div>
  );
}



export default Header;