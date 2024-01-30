import React from "react";
import LineItem from "./LineItem";
const DataList = ({ data }) => {
  return (
    <ul>
      {data.map((data) => (
        <LineItem key={data.id} data={data} />
      ))}
    </ul>
  );
};

export default DataList;
