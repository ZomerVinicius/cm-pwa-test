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
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  grid-column-start: 2;
`
