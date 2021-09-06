/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Stocks from './Stocks'

const Home = () => {
  return (
    <div>
      <h1
        css={css`
          font-size: 48px;
          font-weight: 500;
          line-height: 60px;
        `}
      >
        Stocks
      </h1>
      <Stocks />
    </div>
  )
}

export default Home
