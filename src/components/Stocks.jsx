import React from 'react'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import useAppState from '../Hooks/useAppState'

export default function Stocks() {
  const { loading, stocks } = useAppState()
  if (loading) {
    return <FontAwesomeIcon color="#000" icon={faSpinner} size="lg" spin />
  }

  if (!stocks || !stocks.length) {
    return <div>No stocks</div>
  }

  return (
    <ul
      css={css`
        padding: 0;
      `}
    >
      {stocks.map((stock) => (
        <li key={stock.symbol}>
          <a href={`/stocks/${stock.symbol.toLowerCase()}`}>{stock.symbol}</a>
        </li>
      ))}
    </ul>
  )
}
