import React from "react";
import { useParams } from "react-router-dom";

function Shop() {
  const { id } = useParams();
  return <div>{id}</div>;
}

export default Shop;
