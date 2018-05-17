import React from 'react';
import './App.css';
import Nav from './Nav';
import Article from './Article';
import Gallery from './Gallery';
import Sidebar from './Sidebar';
import images from '../data/images.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarVisible: false
    };
  }

  render() {
    const ViewportLeft = (
      <div className='viewport--left'>
        <Article />
      </div>
    );

    const ViewportRight = (
      <div className='viewport--right'>
        <Gallery images={images} />
      </div>
    );

    const ViewportOverlay = (
      <div
        className="viewport__overlay"
        style={
          {
            opacity: this.state.sidebarVisible ? '.4' : '0',
            pointerEvents: this.state.sidebarVisible ? 'auto' : 'none'
          }
        }
      >
      </div>
    );

    return (
      <div>
        <Nav onClick={() => this.setState({sidebarVisible: !this.state.sidebarVisible})} />
        <Sidebar sidebarVisible={this.state.sidebarVisible} />
        {ViewportOverlay}
        <div className='container'>
          {ViewportLeft}
          {ViewportRight}
        </div>
      </div>
    )
  }

}

export default App;
