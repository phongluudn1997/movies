import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home} from 'modules/home'
import {NoMatch} from 'modules/no-match'
import React from 'react'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
