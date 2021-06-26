import React, { Suspense } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
//import Layout from '../layout/Layout'
const Layout = React.lazy(() => import('../layout/Layout')); //lazy loading

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={props => 
        <Suspense fallback={<div>Loading...</div>}>
          <Layout {...props} />
        </Suspense>} 
      />
    </Switch>
  </BrowserRouter>
)

export default App

