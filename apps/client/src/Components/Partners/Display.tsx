import { FC } from 'react'

import { HomePartners } from 'Api/HomePartners'
import { Container, Image, Logos } from './styles'

export interface HomePartnersProps {
  data: HomePartners[]
}

export const Display: FC<HomePartnersProps> = ({
  data,
}) => {
  return (
    <Container>
      {/* <Title> APOIO </Title> */}
      <Logos>
        {
          data.map((partner) => {
            return (
              <Image key={partner.name} src={partner.logo[0].url} alt={partner.name} />
            )
          })
        }
      </Logos>
    </Container>
  )
}

export default Display
