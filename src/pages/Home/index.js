import { useQuery } from '@apollo/react-hooks'
import Album from 'components/Album'
import Artist from 'components/Artist'
import Header from 'components/Header'
import ArtistContext from 'contexts/ArtistContext'
import gql from 'graphql-tag'
import React, { useState } from 'react'
import { useDebounce } from 'use-debounce'
import { Container } from './Home.styles'

const GET_ARTISTS = gql`
  query artists($artist: String!) {
    queryArtists(byName: $artist) {
      name
      id
      image
      albums {
        name
        id
        image
      }
    }
  }
`

export default function Home() {
  const [artist, setArtist] = useState('Calvin Harris')
  const [artistDebouncedValue] = useDebounce(artist, 600)
  const { loading, error, data } = useQuery(GET_ARTISTS, {
    variables: { artist: artistDebouncedValue }
    // skip: !artistDebouncedValue || artistDebouncedValue.length < 3
  })
  console.log(data)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  return (
    <Container>
      <ArtistContext.Provider value={{ artist, setArtist }}>
        <Header />
      </ArtistContext.Provider>
      <Artist artist={data && data.queryArtists[0]} />
      <Album albums={data && data.queryArtists[0].albums} />
    </Container>
  )
}
