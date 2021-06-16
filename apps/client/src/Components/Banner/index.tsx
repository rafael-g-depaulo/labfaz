import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './style'

const Banner = () => {
  return (
    <Container>
      <div>
        <h1> LABFAZ </h1>
        <h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ligula
          nibh, nec interdum nunc maximus at.
        </h2>
        <Link to='/about'> SAIBA MAIS </Link>
      </div>
    </Container>
  )
}
export default Banner
