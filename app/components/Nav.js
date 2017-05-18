import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <nav className='nav'>
        <div className='nav__item logo'>Logo</div>
        <div className='nav__item buttons'>Buttons</div>
        <div className='nav__item social'>Social</div>
      </nav>
    )
  }

}

export default Nav;
