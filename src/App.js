import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import loadable from './utils/loadable'
import React, { useEffect } from 'react'

import 'animate.css'
import './style/base.scss'
import './style/app.scss'

// 公共模块
const DefaultLayout = loadable(() => import(/* webpackChunkName: 'default' */ './containers/DefaultLayout'))

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={DefaultLayout} />
      </Switch>
    </Router>
  )
}
export default App
