/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC } from 'react'
import { Container, TextBlock } from './style'

import { YoutubePlayerResponsive } from 'Components/YoutubePlayerResponsive'
import Loading from "Components/Loading"
import { useHomePresentationInfo } from 'Api/Presentation';
import useWidth from 'Hooks/useWidth';

export const Presentation: FC = () => {
  const { data, error, isLoading } = useHomePresentationInfo()
  let width = useWidth();

  if (error) return <div>error: { error?.message ?? "" }</div>
  if (isLoading) return <Loading />

  const { Title, SubTitle, Video} = data!
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
