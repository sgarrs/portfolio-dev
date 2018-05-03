import React from 'react';
import './Article.css';
import '../styles/scrollbar.css';
import PS from 'perfect-scrollbar';


function Paragraphs(props) {
  return (
    <div>
      {props.content.map(function(paragraph, index) {
        return (
          <p className='article__p' key={index}>
            {paragraph}
          </p>
        );
      })}
    </div>
  )
}

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        title: 'Pella Southeast Brochure Lorem Ipsum Dolor Amet Sit',
        content: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nisi non tellus elementum dignissim. Sed nibh nibh, efficitur vel consequat nec, finibus a odio. Cras mattis nibh at pulvinar tempus. Nam commodo dictum ex, eu tristique enim bibendum vel. Pellentesque tempor venenatis ante, sit amet dignissim massa gravida a. Morbi at egestas elit, ut accumsan massa. Aliquam pellentesque, arcu at elementum dictum, magna purus laoreet turpis, sed euismod elit libero vel velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce vestibulum sodales varius.',
          'Curabitur justo turpis, semper vitae est eget, dictum cursus nisi. Quisque quis tellus tellus. In interdum dapibus mi, eget sagittis nulla consectetur in. Vivamus bibendum augue diam, in euismod tortor ultricies id. Duis et luctus dui, pulvinar molestie ipsum. Sed quam sem, iaculis sed leo non, egestas pellentesque metus. Aliquam diam dui, rutrum ac tincidunt eget, aliquam a justo. Fusce nibh dolor, posuere pharetra quam quis, ultrices facilisis diam. Vestibulum consectetur vestibulum est varius varius. Proin ultrices urna commodo viverra pharetra. Proin tincidunt erat eget dapibus mollis. Donec vitae augue eu dui iaculis bibendum nec quis mi. Proin risus sem, iaculis eget lobortis id, aliquam id tortor. Quisque ex metus, vulputate et turpis eu, auctor euismod enim. Praesent quis ultricies nibh.',
          'Pellentesque nunc ex, consequat non accumsan a, sodales a risus. Duis eget lectus et ex ornare consectetur. Etiam viverra massa ac tortor ornare semper. Aliquam erat volutpat. Nunc tincidunt facilisis viverra. Curabitur sodales, enim in euismod hendrerit, nunc lectus hendrerit purus, luctus elementum est sapien id ante. Integer pretium ornare mi, vel lobortis sapien fermentum non. Duis facilisis tincidunt vestibulum. Quisque facilisis libero eu sem ornare sollicitudin.',
          'Vivamus imperdiet neque non ex commodo vehicula. Aliquam sed dolor augue. Phasellus rhoncus, ligula non ornare scelerisque, augue orci tristique mauris, sit amet egestas ligula ante a tellus. Cras scelerisque fringilla neque, in consectetur ex aliquam eu. Ut neque felis, vehicula non interdum vitae, accumsan eget ipsum. Sed dictum risus non risus rhoncus tempor. Aliquam eleifend, justo et porta finibus, quam magna bibendum nibh, nec mattis enim velit rutrum ex. Vivamus tincidunt rutrum ipsum.',
          'Vivamus quis est lectus. Aenean eget auctor dui, non lacinia felis. Aenean et dolor risus. Nunc molestie ligula eu justo varius dictum. Vivamus eu vulputate ex, ut vulputate nibh. Pellentesque dignissim leo at commodo finibus. Morbi quam massa, cursus ut ornare a, fermentum in purus. Suspendisse tincidunt sit amet erat a venenatis. Duis a nisl ac odio gravida posuere.',
        ]
      }
    }
  }
  componentDidMount() {
    const article = document.getElementById('article');
    PS.initialize(article, {
    });
  }
  render() {
    return (
      <div className="article__container">
        <article className='article' id='article'>
          <h1 className='article__header'>{this.state.article.title}</h1>
          <Paragraphs content={this.state.article.content} />
        </article>
      </div>
    )
  }

}

export default Article;
