import React from 'react';
import path from 'path';
import './Gallery.css';
import '../styles/scrollbar.css';
import PS from 'perfect-scrollbar';
import Lightbox from 'react-images';

class Gallery extends React.Component {
  constructor(props) {
  // state needs to handle the img path when routing is added
    super(props);
    this.state = {
      isLightboxOpen: false,
      current: 0,
    }

    this.handleGalleryImageClick = this.handleGalleryImageClick.bind(this);
    this.handleLightboxImageClick = this.handleLightboxImageClick.bind(this);
    this.handleLightboxPrevClick = this.handleLightboxPrevClick.bind(this);
    this.handleLightboxNextClick = this.handleLightboxNextClick.bind(this);
  }

  componentDidMount() {
    const gallery = document.getElementById('gallery');
    PS.initialize(gallery, {});
  }

  handleGalleryImageClick(index) {
    this.setState({
      isLightboxOpen: true,
      current: index,
    });
  }

  handleLightboxImageClick() {
    this.setState({
      isLightboxOpen: false
    });
  }

  handleLightboxPrevClick() {
    this.setState((prevState) => ({
      current: prevState.current < 1 ? 0 : prevState.current - 1
    }));
  }

  handleLightboxNextClick() {
    this.setState((prevState) => ({
      current: prevState.current < this.props.images.length ? prevState.current + 1 : prevState.current
    }));
  }

  render() {
    const GalleryImage = (props) => {
      const source = require('../img/' + props.source);
      return (
        <figure>
          <img src={source} alt={props.alt}/>
          { props.alt && <figcaption>{props.alt}</figcaption>}
        </figure>
      );
    };

    const GalleryItems = (props) => {
      return (
        <ul>
          {this.props.images.map((img, index) => {
            const key = `gallery__image--${index}`;
            return (
              <li className='gallery__item' key={key} onClick={() => this.handleGalleryImageClick(index)}>
                <GalleryImage source={img.src} alt={img.alt} />
              </li>
            );
          })}
        </ul>
      );
    }

    const GalleryLightbox = (props) => {
      const images = this.props.images.map((img) => {
        return {
          src: require('../img/' + img.src),
          caption: img.alt
        }
      });

      return (
        <Lightbox
          images={images}
          isOpen={this.state.isLightboxOpen}
          backdropClosesModal={true}
          currentImage={this.state.current}
          onClose={this.handleLightboxImageClick}
          onClickPrev={this.handleLightboxPrevClick}
          onClickNext={this.handleLightboxNextClick}
        />
      );
    }

    return (
      <div className='gallery' id='gallery'>
        <GalleryLightbox />
        <GalleryItems />
      </div>
    )
  }

}

export default Gallery;
