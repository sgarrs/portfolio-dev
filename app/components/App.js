import React from 'react';
import './App.css';
import Nav from './Nav';
import Article from './Article';
import Gallery from './Gallery';

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
    }
  }

  render() {
    return (
      <div className='container'>
        <ViewportLeft />
        <ViewportRight />
      </div>
    )
  }

}

export default App;
