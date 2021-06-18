import React, { FC } from 'react'
import { Container, TextBlock } from './style'

import { YoutubePlayerResponsive } from 'Components/YoutubePlayerResponsive'
import Loading from "Components/Loading"
import { useHomePresentationInfo } from 'Api/Presentation';
import useWidth from 'Hooks/useWidth';


export const Presentation: FC = () => {
  const { data, error, isLoading } = useHomePresentationInfo()
  const { Title, SubTitle, Video} = data!

  let width = useWidth();

  if (isLoading) return <Loading />

  if (error) return <div>error!</div>
  console.log(data)
  return (
    <Container>
      <div className="ContainerContent">
        <YoutubePlayerResponsive href={Video} width={width}/>
        <TextBlock>
          <h1> {Title} </h1>
          <p> {SubTitle} </p>
        </TextBlock>
      </div>
    </Container>
  )
}

export default Presentation
