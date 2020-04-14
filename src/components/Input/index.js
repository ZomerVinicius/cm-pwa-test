import React, { useContext } from 'react'
import ArtistContext from '../../contexts/ArtistContext'
import { Input as InputStyle } from './Input.styles'

export default function Input() {
  const { artist, setArtist } = useContext(ArtistContext)
  return (
    <InputStyle
      type="search"
      autoFocus
      defaultValue={artist}
      placeholder="Search the artist..."
      onChange={(e) => setArtist(e.target.value)}
    />
  )
}
