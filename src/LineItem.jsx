import React from "react";

const LineItem = ({ data }) => {
  // console.log(data);
  return (
    <li key={data.id}>
      <label>{JSON.stringify(data)}</label>
    </li>
  );
};

export default LineItem;
