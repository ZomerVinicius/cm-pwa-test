import { ApolloProvider } from '@apollo/react-hooks'
import { persistCache } from 'apollo-cache-persist'
import React, { useEffect, useState } from 'react'
import OfflineBar from './components/OfflineBar'
import Home from './pages/Home'
import apolloClient, { cache } from './services/api'

function App() {
  const [loadingCache, setLoadingCache] = useState(false)
  useEffect(() => {
    async function loadApolloCache() {
      await persistCache({
        cache,
        storage: window.localStorage
      })

      setLoadingCache(false)
    }

    loadApolloCache()
  }, [])
  return (
    <>
      <OfflineBar />
      <ApolloProvider client={apolloClient}>
        <Home loadingCache={loadingCache} />
      </ApolloProvider>
    </>
  )
}

export default App
