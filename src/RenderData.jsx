import React from "react";
import DataList from "./DataList";

const RenderData = ({ data }) => {
  // console.log(data[0]);
  return (
    <>
      <DataList data={data} />
    </>
  );
};

export default RenderData;
