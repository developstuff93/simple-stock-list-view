import { useContext } from 'react'
import { AppStateContext } from './AppStateProvider'

export default function useAppState() {
  const context = useContext(AppStateContext)
  if (!context) {
    throw new Error('useAppState can only be used within an StocksProvider')
  }
  return context
}
