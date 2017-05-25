import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <nav className='nav'>
        <ul>
          <li className='nav__item logo'>Logo</li>
          <li className='nav__item projects'>
            <i className='fa fa-folder-o'></i>
          </li>
          <li className='nav__item menu'>
            <div className='nav__navigation'>
              <i className='fa fa-chevron-left'></i>
              <i className='fa fa-chevron-right'></i>
              <span className='project--next'>Next: Pella Marketing Brochure</span>
            </div>
          </li>
          <li className='nav__item social'>
            <i className='fa fa-envelope-o'></i>
            <i className='fa fa-twitter'></i>
            <i className='fa fa-instagram'></i>
            <i className='fa fa-behance'></i>
          </li>
        </ul>
      </nav>
    )
  }

}

export default Nav;
