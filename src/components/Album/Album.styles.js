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
export const CardContent = styled.h3`
  padding: 2px 8px;
  text-align: center;
  color: white;
`

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  grid-row-gap: 30px;
  margin-top: 30px;
  padding-bottom: 50px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
