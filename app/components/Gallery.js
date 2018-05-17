import React from 'react';
import path from 'path';
import './Gallery.css';
import '../styles/scrollbar.css';
import PS from 'perfect-scrollbar';

class Gallery extends React.Component {
  constructor(props) {
  // state needs to handle the img path when routing is added
    super(props);
  }

  componentDidMount() {
    const gallery = document.getElementById('gallery');
    PS.initialize(gallery, {});
  }
  render() {
    const GalleryImage = (props) => {
      const source = require('../img/' + props.source);
      return (
        <figure>
          <img src={source} alt={props.alt}/>
          { props.alt ? <figcaption>{props.alt}</figcaption> : '' }
        </figure>
      );
    };

    const GalleryItems = (
      <ul>
        {this.props.images.map((img, index) => {
          const key = `gallery__image--${index}`;
          return (
            <li className='gallery__item' key={key}>
              <GalleryImage source={img.source} alt={img.alt} />
            </li>
          );
        })}
      </ul>
    );

    return (
      <div className='gallery' id='gallery'>
        {GalleryItems}
      </div>
    )
  }

}

export default Gallery;
