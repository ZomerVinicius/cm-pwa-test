import React from 'react'
import { Card, CardContainer, Container } from './Album.styles'

export default function Album({ albums }) {
  return albums.map((album) => (
    <Container>
      <Card key={album && album.id}>
        <img src={album && album.image} width="100%" alt="albumImg" />
        <CardContainer>{album && album.name}</CardContainer>
      </Card>
    </Container>
  ))
}
