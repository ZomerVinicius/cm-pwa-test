import React from 'react'
import { Card, CardContainer, CardContent, Container } from './Album.styles'

export default function Album({ albums }) {
  return (
    <Container>
      {albums.map((album) => (
        <CardContainer>
          <Card key={album && album.id}>
            <img src={album && album.image} width="100%" alt="albumImg" />
            <CardContent>{album && album.name}</CardContent>
          </Card>
        </CardContainer>
      ))}
    </Container>
  )
}
