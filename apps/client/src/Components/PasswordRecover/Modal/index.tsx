import React, { FC } from 'react'

import { ModalDiv, Blur } from '../styles'

interface ModalProps {
  isVisible: boolean,
  setFunction: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal: FC<ModalProps> = ({ isVisible, setFunction }) => {


  return(
    <Blur
      isVisible={isVisible}
      >
      <ModalDiv>
        <p> Hello there </p>
        <button onClick={() => setFunction(!isVisible)} > Voltar </button>
      </ModalDiv>
    </Blur>
  )
}
