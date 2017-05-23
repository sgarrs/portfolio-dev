import React from 'react';
import './App.css';
import Nav from './Nav';
import Article from './Article';
import Gallery from './Gallery';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        /* innerHeight seems to be too big? this solution is janky as fuck */
        height: window.innerHeight - 16 + 'px'
      }
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='viewport--left'>
            <Nav />
            <Article />
        </div>
        <div className='viewport--right'>
          <Gallery />
        </div>
      </div>
    )
  }

}

export default App;
