import React from "react";

const LineItem = ({ data }) => {
  // console.log(data);
  return (
    <li key={data.id}>
      {/* <label>{JSON.stringify(data)}</label> */}
      <table border={1} cellPadding={20} cellSpacing={1} align="center">
        <tr>
          <td width={33.33}>{JSON.stringify(data.id)}</td>
          <td>{JSON.stringify(data.name)}</td>
          <td>{JSON.stringify(data.username)}</td>
          <td>{JSON.stringify(data.email)}</td>
          <td>{JSON.stringify(data.address)}</td>
          <td>{JSON.stringify(data.phone)}</td>
          <td>{JSON.stringify(data.website)}</td>
          <td>{JSON.stringify(data.company)}</td>
        </tr>
      </table>
    </li>
  );
};

export default LineItem;
