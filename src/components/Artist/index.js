import React from 'react'
import { ArtistImage, CardContainer, Container } from './Artist.styles'

export default function Artist({ artist }) {
  return (
    <Container>
      <ArtistImage src={artist && artist.image} alt="artistImg" />
      <CardContainer>{artist && artist.name}</CardContainer>
    </Container>
  )
}
