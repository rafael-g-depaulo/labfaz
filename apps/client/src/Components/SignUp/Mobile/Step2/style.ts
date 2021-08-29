import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContentContainer = styled.div`  
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  

  scroll-snap-align: start;
`

export const Content = styled.div`
  
  margin-top: 2.9rem; 

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const AvatarInput = styled.div`
  width: 256px;
  height: 256px;
  border-radius: 50%;
  border: 3px solid #FC0061;
  background-color: #A3A3A3;
  margin-bottom: 1.94rem;

  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }
`

export const SelectContainer = styled.label`
  
  margin-top: 2.9rem;
`

export const FileInputContainer = styled.div`
  width: 13.3rem;
`
