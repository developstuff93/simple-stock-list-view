/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Route, Switch } from 'react-router-dom'
import AppStateProvider from '../Hooks/AppStateProvider'

import Home from './Home'
import Nav from './Nav'
import Stock from './Stock'

const App = () => {
  return (
    <AppStateProvider>
      <div
        css={css`
          background: #fff;
          box-sizing: border-box;
          color: #34374c;
          min-height: 100%;
          padding: 20px 80px;
        `}
      >
        <Nav />
        <Switch>
          <Route exact path="/stocks/:symbol">
            <Stock />
          </Route>
          <Route exact path={['/stocks', '/']}>
            <Home />
          </Route>
        </Switch>
      </div>
    </AppStateProvider>
  )
}

export default App
