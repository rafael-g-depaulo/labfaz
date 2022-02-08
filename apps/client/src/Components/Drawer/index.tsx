import { FC, useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

import { Title } from "Components/Typography/Title";

import { Container, Haeder, Button, Description, ContentDiv } from "./styles";

interface DrawerProps {
  description?: string;
  teamName?: string;
}

export const Drawer: FC<DrawerProps> = ({
  children,
  description,
  teamName,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container isOpen={isVisible} onClick={() => setIsVisible(!isVisible)}>
      <Button style={{ marginBottom: "1.5em" }}>
        {/* Change color and size later */}
        {isVisible ? (
          <FaAngleUp size={35} color="white" />
        ) : (
          <FaAngleDown size={35} color="white" />
        )}
      </Button>
      <Haeder isOpen={isVisible}>
        <Title level={1}> {teamName} </Title>
        <Description isOpen={isVisible}> {description} </Description>
      </Haeder>
      <ContentDiv isOpen={isVisible}>{children}</ContentDiv>
    </Container>
  );
};

export default Drawer;
