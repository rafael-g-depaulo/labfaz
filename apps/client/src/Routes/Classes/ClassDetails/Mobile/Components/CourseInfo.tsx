import React, { FC, useState } from "react";
import { Course } from "Api/Courses";

import { CourseInfoDiv, TagContainer, DrawerButton } from "../styles";

import { Title } from "Components/Typography/Title";
import { Text } from "Components/Typography/Text";
import Label from "Components/Label";
import Details from "./Details";

import Button from "Routes/Classes/SubscriptionButton";

import { format } from "date-fns";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface CourseResumeProps {
  course: Course;
}

export const CourseInfo: FC<CourseResumeProps> = ({ course }) => {
  const [isOpen, setIsOpen] = useState(false);

  const finish_date = course.subscription_finish_date
  const now = (new Date()).getTime()
  const finish = (new Date(finish_date)).getTime()
  const passedFinish = finish < now

  return (
    <CourseInfoDiv background_color={"rgba(12, 116, 255, 1)"}>
      <Title> {course?.name} </Title>
      <Text> {course?.short_description} </Text>
      <TagContainer>
        {course?.tags.map((tag, index) => {
          return <Label name={tag} image={undefined} key={index} />;
        })}
      </TagContainer>
      <Button
        courseId={course?.id}
        isAvailabe={course?.available}
        link={course?.link}
        hasSubscription={course?.has_subscription}
      >
        {" "}
        INSCREVA-SE{" "}
      </Button>
      
      {!!finish_date &&
        <Text>
          {passedFinish ? "Inscrições encerraram em" : "Inscrições até"}
          {" "}
          {format(course?.subscription_finish_date, "DD-MM-YYYY")
            .replaceAll("-", "/")}{" "}
        </Text>
      }

      <Details
        isOpen={isOpen}
        details={course?.detail}
        teachers={course?.teacher}
        fonte={course?.fonte}
      />

      <DrawerButton onClick={() => setIsOpen(!isOpen)}>
        {" "}
        {isOpen ? "Minimizar resumo" : "Abrir resumo"}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </DrawerButton>
    </CourseInfoDiv>
  );
};

export default CourseInfo;
