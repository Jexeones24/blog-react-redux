import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import reducers from './reducers';
import PostsIndex from './components/posts_index'
import PostsShow from './components/posts_show'


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router >
      <div>
        <Route path ="/" component={PostsIndex} />
        <Route path ="/posts/:id" component={PostsShow} />
        <Route path ="/posts/new" component={PostsNew} />
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container'));
