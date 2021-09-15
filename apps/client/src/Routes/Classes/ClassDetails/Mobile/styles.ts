import styled from "styled-components"
import { motion } from 'framer-motion'

interface CustomProps {
  background_color?: string
  isVisible?: boolean
}


export const BannerDiv = styled.div`
  max-width: 100vw;
  max-height: 360px;
  min-width: fit-content;
  border: 5.4px solid rgba(0, 0, 0, 0.25);
  filter: drop-shadow(0px 0px 6px #090909);
`

export const ResumeInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 300px;
  background-color: black;


  place-items: center;

  h1 {
    margin-bottom: 1em;
    margin-top: 2em;
    color: white
  }

  p {
    text-align: justify;
    color: white;
    max-width: 80%;
  }

  p:nth-child(4) {
    margin-bottom: 5rem;
  }
`


export const CourseResumeDiv = styled(motion.div)<CustomProps>`
  display: flex;
  flex-direction: column;
  place-items: center;
  margin: 2.5rem 0;
`

export const CourseInfoDiv = styled.div<CustomProps>`
  display: flex;
  flex-direction: column;
  place-items: center;
  
  background-color: ${props => props.background_color ? props.background_color : "white"};

  > h1 {
    margin-top: 1.2em;
    margin-bottom: 0.65em;
  }

  > p {
    text-align: justify;
    font-size: var(--font-size-medium);
    margin-bottom: 1.8em;
    max-width: 80%;
  }

  p:nth-child(5) {
    font-weight: 700;
  }

  p:nth-child(6) {
    font-weight: 700;

    :hover {
      cursor: pointer;
    }
  }
`

export const Image = styled.img`
  object-fit: cover;
  max-width: 100%;
  min-height: 100%;
`

export const TagContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 19px;
  margin-bottom: 2.4rem;
`

export const Button = styled.button`
  min-width: 211px;
  min-height: 47px;
  background-color: #FC0061;
  box-shadow: 
    4px 4px 0px black,
    inset 0px 2.88px 2.88px rgba(0, 0, 0, 0.14);
  border-radius: 2.16px;
  border: none;
  margin-bottom: 1.1rem;

  font-weight: 700;
  font-size: var(--font-size-medium);
`
export const DrawerButton = styled.div`
  font-weight: 700;
  font-size: var(--font-size-medium);
  display: flex;
  flex-direction: column;
  place-items: center;
  cursor: pointer;

  svg {
    margin-bottom: 1rem;
  }
`
