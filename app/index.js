var React = require('react');
var ReactDOM = require('react-dom');

import { AppContainer } from 'react-hot-loader';
import loadFonts from './utils/loadFonts';
import App from './components/App';

import 'normalize.css';
import './index.css';

loadFonts();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}
