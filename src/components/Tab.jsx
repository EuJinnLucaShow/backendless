import React from "react";

export const Tab = ({ title, data }) => (
  <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
    <h1>{title}</h1>
    {data}
  </div>
);



