import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <nav className='nav'>
        <ul>
          <li className='nav__item logo'>Logo</li>
          <li className='nav__item menu'>Menu</li>
          <li className='nav__item social'>Social</li>
        </ul>
      </nav>
    )
  }

}

export default Nav;
