import styled from 'styled-components'

export const Container = styled.div`
  background-color: #090909;
  display: inline-grid;
  grid-template-columns: 5% 90% 5%;
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-row-gap: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-bottom: 100px;
`
