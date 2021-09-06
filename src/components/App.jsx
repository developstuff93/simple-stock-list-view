/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'

const App = () => {
  return (
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
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App
