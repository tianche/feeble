import React from 'react'
import { Router, IndexRoute, Route } from 'tuku/router'
import App from './containers/App'
import ActiveTodo from './containers/ActiveTodo'
import CompletedTodo from './containers/CompletedTodo'

export default function routes({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={ActiveTodo} />
        <Route path="/completed" component={CompletedTodo} />>
      </Route>
    </Router>
  )
}