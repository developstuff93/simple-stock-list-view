/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams } from 'react-router-dom'
import useAppState from '../Hooks/useAppState'

export default function Stock() {
  const { symbol } = useParams()
  const { loading, stocks } = useAppState()

  console.log(stocks)

  if (loading) {
    return <FontAwesomeIcon color="#000" icon={faSpinner} size="lg" spin />
  }

  if (!stocks || !stocks.length) {
    return <div>No stocks</div>
  }

  if (!symbol) {
    return <div>Invalid Symbol</div>
  }

  const curStock = stocks.find(
    (stock) => stock.symbol.toLowerCase() === symbol.toLowerCase()
  )

  if (!curStock) {
    return <div>{symbol.toUpperCase()} stock not available</div>
  }

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <span>{curStock.symbol}</span>
      <img
        css={css`
          width: 200px;
          height: auto;
        `}
        src={curStock.image}
        alt={`${symbol.toUpperCase()} logo`}
      />
    </div>
  )
}
