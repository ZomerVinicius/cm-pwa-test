import styled from 'styled-components'

export const Card = styled.div`
  box-shadow: 0 0.3px 4px 0 gray;
  transition: 0.3s;
  background-color: black;
  width: 70%;

  &:hover {
    margin-top: -.25rem;
    box-shadow:  0 0.3px 4px 0 white;
}
  }
`
export const CardContainer = styled.h3`
  padding: 2px 8px;
  text-align: center;
  color: white;
  font-size: 1.8rem;
  @media (max-width: 500px) {
    font-size: 1.3rem;
  }
`

export const ArtistImage = styled.img`
  width: 300px;
  @media (max-width: 500px) {
    width: 200px;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  grid-column-start: 2;
  grid-row-start: 2;
  margin-bottom: 50px;
  align-items: center;
  margin-top: 30px;
`
