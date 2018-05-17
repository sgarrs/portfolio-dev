import React from 'react';
import './Article.css';
import '../styles/scrollbar.css';
import PS from 'perfect-scrollbar';
import articleData from '../data/articles.json';



class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: articleData[0]
    };
  }

  componentDidMount() {
    const article = document.getElementById('article');
    PS.initialize(article, {});
  }

  render() {
    const Paragraphs = (props) => {
      return (
        <div>
          {props.content.map((paragraph, index) => {
            return (
              <p className='article__p' key={index}>
                {paragraph}
              </p>
            );
          })}
        </div>
      )
    }

    return (
      <div className="article__container">
        <article className='article' id='article'>
          <h1 className='article__header'>{this.state.article.title}</h1>
          <p className='article__author'>{this.state.article.author}</p>
          <Paragraphs content={this.state.article.content} />
        </article>
      </div>
    )
  }

}

export default Article;
