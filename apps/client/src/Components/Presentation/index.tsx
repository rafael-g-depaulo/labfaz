/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC } from "react";

import Display from "./Display";

export interface PresentationProps {
  title: string;
  subtitle: string;
  video: string;
}

export const Presentation: FC<PresentationProps> = ({
  title,
  subtitle,
  video,
}) => {
  return <Display Video={video} Title={title} SubTitle={subtitle} />;
};

export default Presentation;
