import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <nav className='nav'>
        <div className='nav__logo'>Logo</div>
        <div className='nav__buttons'>Buttons</div>
        <div className='nav__social'>Social</div>
      </nav>
    )
  }

}

export default Nav;
