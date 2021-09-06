import React, { FC } from "react";

import Display from "./Display";

import { HomePartners } from "Api/HomePartners";

export interface Props {
  partners: HomePartners[];
}

export const Partners: FC<Props> = ({ partners }) => {
  return <Display data={partners} />;
};

export default Partners;
