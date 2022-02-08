import { FC } from 'react'

import Wireframe from 'Components/Wireframe'
import Image from "../Image"
import { Text, Content, Rectangle2 } from './style'

export const Web: FC = () => {
  return (
    <Wireframe>
      <Content>
        <Rectangle2>
          <Image />
          <Text>
            A página que você está procurando não existe.
          </Text>
        </Rectangle2>
      </Content>
    </Wireframe>
  )
}

export default Web
