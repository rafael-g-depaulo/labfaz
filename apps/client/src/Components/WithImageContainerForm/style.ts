import styled from 'styled-components'


export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
  "left right";

  max-width: 1280px;
  max-height: 707px;
  `;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`
export const ImageDiv = styled.div`
  display: flex;
  max-width: 640px;
  max-height: 707px;
  border: 1px solid black;
  align-content: center;
`
