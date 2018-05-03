import React from 'react';
import './Nav.css';
import logo from '../img/logo.png';

function NavLogo(props) {
  return (
    <li className='nav__item logo' onClick={props.onClick}>
      <img src={logo} />
    </li>
  );
}

function NavProjectsLink(props) {
  return (
    <li className='nav__item projects'>
      <i className='fa fa-folder-o'></i>
    </li>
  );
}

function NavProjectsMenu(props) {
  return (
    <li className='nav__item menu'>
      <div className='nav__navigation'>
        <i className='fa fa-chevron-left'></i>
        <i className='fa fa-chevron-right'></i>
        <span className='project--next'>Next: {props.nextProject}</span>
      </div>
    </li>
  );
}

function NavSocial(props) {
  return (
    <li className='nav__item social'>
      <i className='fa fa-envelope-o'></i>
      <i className='fa fa-twitter'></i>
      <i className='fa fa-instagram'></i>
      <i className='fa fa-behance'></i>
    </li>
  );
}

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextProject: 'Pella Marketing Brochure',
      showBody: false
    }
  }
  render() {
    const navBody = (
      <div>
        <NavProjectsLink />
        <NavProjectsMenu nextProject={this.state.nextProject}/>
        <NavSocial />
      </div>
    );

    return (
      <nav className='nav'>
        <ul>
          <NavLogo onClick={this.props.onClick} />
          {this.state.showBody ? navBody : ''}
        </ul>
      </nav>
    )
  }

}

export default Nav;
