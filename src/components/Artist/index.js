import React from 'react'
import { CardContainer, Container } from './Artist.styles'

export default function Artist({ artist }) {
  console.log(artist)
  return (
    <Container>
      <img src={artist && artist.image} width="30%" alt="artistImg" />
      <CardContainer>{artist && artist.name}</CardContainer>
    </Container>
  )
}
