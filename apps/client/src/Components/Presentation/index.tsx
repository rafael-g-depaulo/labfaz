import React, { FC } from 'react'
import {
  Container,
  TextBlock,
  TextTitle,
  Subtitle,
  YoutubePlayerResponsive
} from './style'

// import { YoutubePlayerResponsive } from 'Components/YoutubePlayerResponsive'
import { YoutubePlayer } from 'Components/YoutubePlayer'
// import Loading from "Components/Loading"
// import { useHomePresentationInfo } from 'Api/Presentation';
// 

export const Presentation: FC = () => {
  // const { data, error, isLoading } = useHomePresentationInfo()
  // if (error) return <div>error: { error?.message ?? "" }</div>
  // if (isLoading) return <Loading />

  // const { Title, SubTitle, Video} = data!

  const Title = 'LABFAZ'
  const SubTitle = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.'
  const Video = 'https://www.youtube.com/watch?v=VriRYkpVVMc'

  return (
    <Container>
      <div className="ContainerContent">
        <YoutubePlayerResponsive>
          <YoutubePlayer href={Video} />
        </YoutubePlayerResponsive>
        <TextBlock>
          <TextTitle> {Title} </TextTitle>
          <Subtitle> {SubTitle} </Subtitle>
        </TextBlock>
      </div>
    </Container>
  )
}

export default Presentation
