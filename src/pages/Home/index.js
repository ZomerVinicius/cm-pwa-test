/* eslint-disable no-nested-ternary */
import { useQuery } from '@apollo/react-hooks'
import Album from 'components/Album'
import Artist from 'components/Artist'
import Header from 'components/Header'
import ArtistContext from 'contexts/ArtistContext'
import gql from 'graphql-tag'
import React, { useState } from 'react'
import { useDebounce } from 'use-debounce'
import { CenteredLabel, Container } from './Home.styles'

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
  const [artist, setArtist] = useState('')
  const [artistDebouncedValue] = useDebounce(artist, 600)
  const { loading, error, data } = useQuery(GET_ARTISTS, {
    variables: { artist: artistDebouncedValue },
    skip: !artistDebouncedValue || artistDebouncedValue.length < 3
  })
  if (error) return `Error! ${error.message}`
  return (
    <Container>
      <ArtistContext.Provider value={{ artist, setArtist }}>
        <Header />
      </ArtistContext.Provider>
      {loading ? (
        <CenteredLabel>Carregando...</CenteredLabel>
      ) : data && data.queryArtists.length === 0 ? (
        <CenteredLabel>
          Não foi possível achar artistas com esse nome
        </CenteredLabel>
      ) : (
        data &&
        data.queryArtists[0] && (
          <>
            <Artist artist={data && data.queryArtists[0]} />
            <Album albums={data && data.queryArtists[0].albums} />
          </>
        )
      )}
    </Container>
  )
}
