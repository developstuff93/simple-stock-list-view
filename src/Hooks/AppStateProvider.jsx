import axios from 'axios'
import React, { createContext, useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import { STOCKS_URL } from '../constants'

export const AppStateContext = createContext(null)

export default function AppStateProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [stocks, setStocks] = useState([])
  const value = {
    loading,
    setLoading,
    stocks,
    setStocks,
  }

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        setLoading(true)
        const res = await axios.get(STOCKS_URL)
        const { stocks: newStocks } = res.data
        setStocks(newStocks || [])
      } catch (error) {
        setStocks([])
      } finally {
        setLoading(false)
      }
    }
    fetchStocks()
  }, [setLoading, setStocks])

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  )
}
