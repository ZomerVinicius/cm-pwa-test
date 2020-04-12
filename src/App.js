import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import React from 'react'
import Home from './pages/Home'

const client = new ApolloClient({
  uri: 'https://spotify-graphql-server.herokuapp.com/graphql'
})
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    </>
  )
}

export default App
