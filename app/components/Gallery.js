import React from 'react';
import './Gallery.css';
import '../styles/scrollbar.css';
import PS from 'perfect-scrollbar';
import flyer from '../img/commercial-flyer_1-final.jpg';
import sticker from '../img/caution-sticker-2.jpg';

function Images(props) {
  return (
    <ul>
      {props.sources.map(function(source, index) {
        return (
          <li className='gallery__item' key={index}>
            <figure>
              <img src={source} alt={props.alt[index]}/>
              { props.alt[index] ? <figcaption>{props.alt[index]}</figcaption> : null }
            </figure>
          </li>
        );
      })}
    </ul>
  )
}

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [
        sticker,
        flyer,
        'https://placekitten.com/500/800',
        'https://placekitten.com/700/900'
      ],
      alt: [
        '',
        'Front Page',
        '',
        'Back Page',
      ]
    }
  }
  componentDidMount() {
    const gallery = document.getElementById('gallery');
    PS.initialize(gallery, {
    });
  }
  render() {
    return (
      <div className='gallery' id='gallery'>
        <Images sources={this.state.sources} alt={this.state.alt} />
      </div>
    )
  }

}

export default Gallery;
