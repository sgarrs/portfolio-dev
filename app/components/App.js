import React from 'react';
import './App.css';
import Nav from './Nav';
import Article from './Article';
import Gallery from './Gallery';
import Sidebar from './Sidebar';

function ViewportLeft(props) {
  return (
    <div className='viewport--left'>
      <Article />
    </div>
  );
}

function ViewportRight(props) {
  return (
    <div className='viewport--right'>
      <Gallery />
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarVisible: false
    };
  }

  render() {
    return (
      <div>
        <Nav
          onClick={() => this.setState({sidebarVisible: !this.state.sidebarVisible})}
        />
        <Sidebar sidebarVisible={this.state.sidebarVisible} />
        <div
          className="viewport__overlay"
          style={
            {
              opacity: this.state.sidebarVisible ? '.4' : '0',
              pointerEvents: this.state.sidebarVisible ? 'auto' : 'none'
            }
          }
        ></div>
        <div className='container'>
          <ViewportLeft />
          <ViewportRight />
        </div>
      </div>
    )
  }

}

export default App;
