import React, { FC } from "react"

import Wireframe from "Components/Wireframe"
import styled from "styled-components"

export interface DisplayProps {
}

const Box = styled.div`
  flex-grow: 1;
  display: flex;
`

export const Display: FC<DisplayProps> = () => {

  return (
    <Wireframe>
      {/* <Banner title={title} subtitle={subtitle} image={image} align="left" /> */}
      <Box>
        <iframe
          // width="1200"
          // height="3355"
          width="100%"
          // height="100%"
          title="observatorio"
          src="https://datastudio.google.com/embed/reporting/3c7bd94a-2ff0-4f94-a97f-1029ab807946/page/YmXhC"
          style={{ border: "0" }}
          frameBorder="0"
        />
      </Box>
    </Wireframe>
  )
}

export default Display;
