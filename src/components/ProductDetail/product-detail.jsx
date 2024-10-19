import React from "react";
import { PorductsData } from "../../Data/Products";

import { useParams } from "react-router-dom";
export const ProductDetail = () => {
  const { id } = useParams();
  const data = PorductsData.find((item) => item.id === parseInt(id));
  return <div>{data && <h1>{data.title}</h1>}</div>;
};
