import React, { Suspense } from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
//import Layout from '../layout/Layout'
const Layout = React.lazy(() => import('../layout/Layout')); //lazy loading

const App = () => (
  <HashRouter>
    <Switch>
      <Route path="/" component={props => 
        <Suspense fallback={<div>Loading...</div>}>
          <Layout {...props} />
        </Suspense>} 
      />
    </Switch>
  </HashRouter>
)

export default App

