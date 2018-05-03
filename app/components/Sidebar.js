import React from 'react';
import './Sidebar.css';

function Sidebar(props) {
  return (
    <div className="sidebar" style={{left: props.sidebarVisible ? '0px' : '-350px'}}>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
      </ul>
    </div>
  );
}

export default Sidebar;
