/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'

const Nav = () => (
  <nav
    css={css`
      align-items: center;
      display: flex;
      justify-content: flex-end;
      margin-bottom: 20px;
    `}
  >
    <ul
      css={css`
        display: flex;
        list-style: none;
        > li {
          margin-left: 20px;
        }
        & a {
          color: inherit;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      `}
    >
      <li>
        <Link to="/">Stocks</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
