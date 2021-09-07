import React, { FC } from "react";

import Display from "./Display";

import { HomePartners } from "Api/HomePartners";

export interface PartnersProps {
  partners: HomePartners[];
}

export const Partners: FC<PartnersProps> = ({ partners }) => {
  return <Display data={partners} />;
};

export default Partners;
