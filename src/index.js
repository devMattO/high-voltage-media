import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route, Router, IndexRoute } from 'react-router'
import App from './App';
import Root from './Root.js';
import AboutUs from './AboutUs.js'
import VimeoRequest from './vimeo-request.js'
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={App} />
      <Route path="/about" component={AboutUs} />
      <Route path="/work" component={VimeoRequest} />
    </Route>
  </Router>,
  document.getElementById('root')
);
