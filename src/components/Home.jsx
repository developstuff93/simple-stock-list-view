/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Home = ({ stocks = [] }) => (
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
    {stocks.length ? (
      <ul
        css={css`
          padding: 0;
        `}
      ></ul>
    ) : null}
  </div>
)

export default Home
