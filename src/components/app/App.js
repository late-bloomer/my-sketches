import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/my-sketches" component={props => <Layout {...props} />} />
    </Switch>
  </BrowserRouter>
)

export default App

