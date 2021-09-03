import styled from 'styled-components'

interface StatusProps {
  isAvailable: boolean
}

interface ListItemProps {
  status: string
}

export const Status = styled.p<StatusProps>`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.isAvailable ? "green" : "red"}
`

export const ListItem = styled.div<ListItemProps>`
  max-height: 4rem;
  min-height: 2rem;
  min-width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
  border: 1px solid #4268F6;

  :nth-child(2) {
    color: ${props => props.status == 'pending' ? "yellow" : 'red' }
  }
`

export const StatusBar = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;

  :first-child {
    background-color: greenyellow;
  }
`
