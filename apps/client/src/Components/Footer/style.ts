import styled from 'styled-components'

export const FooterContainer = styled.footer`
  --font-size: 16px
  padding: 24px 12px;
  font-weight: 600;
  min-height: 300px;
  background: rgba(196, 196, 196, 0.25);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  > div {
    margin: 20px 48px;
  }
  @media(min-width: 768px){
    padding: 24px 48px;
    align-items: flex-start;
    > div {
    margin: 20px auto;
    }
  }
`
