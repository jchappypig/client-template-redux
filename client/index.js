import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>,
  document.getElementById('root')
)
