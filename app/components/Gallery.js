import React from 'react';
import './Gallery.css';
import '../styles/scrollbar.css';
import PS from 'perfect-scrollbar';

function Images(props) {
  return (
    <ul>
      {props.src.map(function(s, index) {
        return (
          <li className='gallery__item' key={index}>
            <figure>
              <img src={s} alt={props.alt[index]}/>
              { props.alt[index] ? <figcaption>{props.alt[index]}</figcaption> : null }
            </figure>
          </li>
        )
      })}
    </ul>
  )
}

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: [
        'https://placekitten.com/800/800',
        'https://placekitten.com/500/700',
        'https://placekitten.com/700/900'
      ],
      alt: [
        'Front Page',
        '',
        'Back Page',
      ]
    }
  }
  componentDidMount() {
    var gallery = document.getElementById('gallery');
    PS.initialize(gallery, {
    });
  }
  render() {
    return (
      <div className='gallery' id='gallery'>
        <Images src={this.state.src} alt={this.state.alt} />
      </div>
    )
  }

}

export default Gallery;
