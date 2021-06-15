import React from 'react'
import { Container, TextBlock } from './style'

import { YoutubePlayer } from 'Components/YoutubePlayer'
import useWidth from 'Hooks/useWidth';


const Presentation = () => {
  let largura = useWidth();
  return (
    <Container>
      <div className="ContainerContent">
        { largura >= 768 && largura <= 844 ? 
          (
            <YoutubePlayer
              href="https://www.youtube.com/watch?v=gvQSng1aR9s"
              width="400"
              height="200"
            />
          ) : (
            largura > 844 && largura <= 1080 ? 
            <YoutubePlayer
              href="https://www.youtube.com/watch?v=gvQSng1aR9s"
              width="500"
              height="300"
            /> :
            <YoutubePlayer
              width="500"
              href="https://www.youtube.com/watch?v=gvQSng1aR9s"
            />
          )
        }
        <TextBlock>
          <h1> Lorem ipsum </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula 
            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
            pretium quis, sem. Nulla consequat massa quis enim. Donec.
          </p>
        </TextBlock>
      </div>
    </Container>
  )
}

export default Presentation
