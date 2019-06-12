import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Route, HashRouter  as Router} from 'react-router-dom';

ReactDOM.render(
  <Router  >
      <Route path="/" component={App} />
  </Router >,
  document.getElementById('root')
);
